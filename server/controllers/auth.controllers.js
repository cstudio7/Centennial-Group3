import User from '../models/users.model.js'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config.js'


const signin = async (req, res) => { 
try {
    let user = await User.findOne({ "email": req.body.email })
    console.log(user)
    if (!user){
        console.log("not here")
        return res.status('401').json({ error: "User not found" })
    }
    // return res.status('401').json({ error: "User not found" })
    if (!user.authenticate(req.body.password)) {
    return res.status('401').send({ error: "Email and password don't match." })
}

const token =  jwt.sign({
    _id: user._id 
  }, config.jwtSecret) 

   res.cookie('t', token, {
     expire: new Date() + 9999 
}) 

return res.json({
token, 
user: {
_id: user._id, 
name: user.name,
email: user.email 
}
})


} catch (err) {
return res.status('401').json({ error: "Could not sign in" }) 
}
}

/**
 * Sign out the user and clear the authentication cookie.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
const signout = (req, res) => {
    // Clear the authentication cookie
    res.clearCookie("t");

    // Return a JSON response with a success message
    return res.status(200).json({
        message: "signed out"
    });
};


/**
 * Verifies the JWT token from the request headers and logs the result.
 *
 * @param {Object} req - The request object containing the headers.
 */
const requireSignin = (req,res, next) => {
    // Extract the JWT token from the authorization header
    const token = req.headers.authorization.split(' ')[1];

    // Verify the JWT token using the jwtSecret and set the 'auth' property in the result object
    const result = jwt.verify(token, config.jwtSecret, { userProperty: 'auth' });

    req.auth = result;
    next();
};


const hasAuthorization = (req, res, next) => {
    /**
     * Middleware to check if the user is authorized.
     *
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     * @param {Function} next - The next middleware function.
     */

        // Check if the user is authorized
        const authorized = req.profile && req.auth && req.profile._id == req.auth._id;

        // Log the authorized status
        console.log(authorized);
        // If not authorized, return an error response
        if (!authorized) {
            return res.status(403).json({
                error: "User is not authorized"
            });
        }
        // Call the next middleware function
        next();
}
export default { signin, signout, requireSignin, hasAuthorization }