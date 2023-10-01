
const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    name : {
        type : String,
        require: true
    }, 
    pName : {
        type: String,
        require: true
    } ,
    model  : {
        type : String,
        require: true
    },
    quantity : {
        type : String,
        require: true
    },
    dop : {
        type : String,
        require: true
    },
    desc : {
        type : String,
        require: true
    },
    isWorking : {
        type : String,
        require: true
    },
  
    price : {
        type : String,
        require: true
    },
    contact : {
        type : String,
        require: true
    },
    
})

const Products = mongoose.model('products' , ProductsSchema)


const EwasteRecycylerSchema = mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    
    enquiries: {
        type : String,
        require: true
    },
  
    contact : {
        type : String,
        require: true
    },
    city : {
        type : String,
        require: true
    },
    state : {
        type : String,
        require: true
    },
})

const EwasteRecycler = mongoose.model('ewasterecycler' , EwasteRecycylerSchema)

module.exports = EwasteRecycler, Products