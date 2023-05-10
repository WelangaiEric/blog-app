const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    blogTitle:{
        type: String,
        required :true
    },
    body:{
        type: String,
        required :true
    },
    snippet:{
        type: String,
        required :true,
        
    }
},{timestamps:true});
const Blogs= mongoose.model('Blogs',blogsSchema)
module.exports = Blogs;