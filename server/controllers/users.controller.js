import User from '../models/users.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

//create and save user


//list all users
const list= async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
        })
    }
};

//list user by id


//read hashed password

//update user by id


//delete user by id
const remove = async (req, res) => { 
try {
let user = req.profile
console.log(user)
let deletedUser = await user.deleteOne() 
 deletedUser.hashed_password = undefined 
 deletedUser.salt = undefined
res.json({message: "Deleted User"}) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
export default {list,remove}
// export default { create, userByID, read, list, remove, update }