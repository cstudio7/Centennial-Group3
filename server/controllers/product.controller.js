import Product from './../models/product.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

//create and save product
const create = async (req, res) => { 
const product = new Product(req.body) 
try {
await product.save()
return res.status(200).json({ 
message: "Successfully entered product!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

//list all products
const list = async (req, res) => { 
try {
let products = await Product.find().select('name updated created') 
res.json(products)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

//list product by id
const productByID = async (req, res, next, id) => { 
try {
let product = await Product.findById(id) 
if (!product)
return res.status('400').json({ 
error: "Product not found"
})
req.profile = product
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve product"
}) 
}
}

//read products
const read = (req, res) => {
    return res.json(req.profile) 
    }
const update = async (req, res) => { 
try {
let product = req.profile
product = extend(product, req.body) 
product.updated = Date.now() 
await product.save()
res.json(product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

//remove product
const remove = async (req, res) => { 
    try {
    let product = req.profile
    let deletedProduct = await product.deleteOne() 
    res.json({message: "Deleted product"})
    } catch (err) {
    return res.status(400).json({
    error: errorHandler.getErrorMessage(err) 
    })
    } 
    }
    
    //remove all products
    const removeAll= async(req,res) =>{
        try {
            let deletedProducts = await Product.deleteMany() 
            res.json({message: "Deleted all products"})
            return res.status(200).json({ 
                message: "Successfully removed all products!"
                }) 
             
            } catch (err) {
            return res.status(400).json({
            error: errorHandler.getErrorMessage(err) 
            })
            } 
            
    }
    
export default { create, productByID, read, list, remove, removeAll, update }