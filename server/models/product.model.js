import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    //product name json model
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
        },
    //product description json model
    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    },
    //product price json model
    price: {
        type: Number,
        trim: true,
        required: 'Price is required'
    },
    //product quantity json model
    quantity: {
        type: Number,
        trim: true,
        required: 'Quantity is required'
    },
    //product category json model
    category: {
        type: String,
        trim: true,
        required: 'Category is required'
    },
    //set created 
    created: {
        type: Date,
        default: Date.now
    },
    //set updated
    updated: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.model('Products', ProductSchema);
