const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String , required: true, unique:true},
    password: { type: String , required: true},
    qualification: { type: String , required: true},
    city: { type: String , required: true},
    contact: { type: Number, required: true, unique: true },
    role:{type:String, enum:['user','admin'], default:'user'},
    token:{type:String}
})

const User = mongoose.model('User', userSchema)
module.exports = User