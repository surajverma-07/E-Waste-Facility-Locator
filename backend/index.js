const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require("mongoose");

const EwasteRecycler = require('./schema')
const Products = require('./schema');
const { json } = require('express/lib/response');

app.use(cors());
// Parse JSON bodies
app.use(express.json());
const mongoURL = "mongodb+srv://vermapalak161104:fRvuk8lsB0MHlRbE@cluster0.7d1is9y.mongodb.net/e-waste-locator?retryWrites=true&w=majority"
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));
var db = mongoose.connection
 

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    
    email : {
        type : String,
        require: true
    },
    password : {
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

const User = mongoose.model('users' , UserSchema)


const AuthoritySchema = mongoose.Schema({
    company : {
        type : String,
        require: true
    },  
      email : {
        type : String,
        require: true
    },
    password : {
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

const Authority = mongoose.model('authority' , AuthoritySchema)

app.get('/' , (req,res) => {
    res.send('Server is workiung fine')
})

app.post('/register-user' , async  (req,res) => {
    // const name = 'Vikas'
    // const email = 'vikas@gmail.com'
    // const password = '123456'
    // const contact = '6232275431'
    // const city = 'Bilaspur'
    // const state = 'Chattisgarh'
    console.log('Post Request Trigerred');
    // const {username , email, password, city, state} = req.body
    const {username     } = req.body
    try {
     const newUser = await User.create({name : username , email, password, contact, city, state})
     console.log(newUser);
     res.json(newUser).status(200)
    
 } catch (error) {
    res.json('server error').status(400)
 }
}) 
app.get('/register-authority' , async  (req,res) => {
    const company = 'Vikas'
    const email = 'vikas@gmail.com'
    const password = '123456'
    const contact = '6232275431'
    const city = 'Bilaspur'
    const state = 'Chattisgarh'
    try {
     const newUser = await Authority.create({company , email, password, contact, city, state})
     console.log(newUser);
     res.json(newUser).status(200)
    
 } catch (error) {
    res.json('server error').status(500)
 }
}) 

app.post('/login-user' , async (req,res) => {
    const email = 'vikas@gmail.com'
    const password = '123456'

    try {
        const isUser = await User.findOne({email})

        if(isUser){
            if(password === isUser.password){
                res.json('Logged in suucessfully').status(200)
            }
            else{
                res.json('Incorrect Password').status(401)
            }
        }

        res.json('User does not exists').status(402)

    } catch (error) {
        res.json('Server error').status(500)
    }
})
app.post('/login-authority' , async (req,res) => {
    const email = 'vikas@gmail.com'
    const company = 'Viaks'
    const password = '123456'

    try {
        const isUser = await User.findOne({email , company})

        if(isUser){
            if(password === isUser.password){
                res.json('Logged in suucessfully').status(200)
            }
            else{
                res.json('Incorrect Password').status(401)
            }
        }

        res.json('User does not exists').status(402)

    } catch (error) {
        res.json('Server error').status(500)
    }
})

app.post('/add-product' , async (req,res) => {
    const  {name , pName, model, quantity, dop, contact, desc, isWorking, price} = req.body
    try {
        const newProduct = await Products.create({name , pName, model, quantity, dop, contact, desc, isWorking, price})
        res,json(newProduct).status(200)
    } catch (error) {
        res.json('Server Error').status(200)
        
    }
})

app.get('/get-products' , async (req,res) => {
    const prodList = await Products.findAll()
    if(prodList){
        res.json(prodList).status(200)
    }
    else{
        res.json('No products availbale').status(400)
    }
})




app.listen(5000 , (req,res) => {
    console.log('Server is running...');
})