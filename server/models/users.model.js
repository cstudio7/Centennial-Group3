import mongoose from "mongoose";
// const UserSchema = new mongoose.Schema({
//name requirments

//email requirments

//set created date

//set updated date

//create hashed password

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
  });
  



export default mongoose.model('User', UserSchema);