const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const Users = require('./models/users')
const Blogs = require('./models/blogs')
const Comment = require('./models/comments')
const { default: axios } = require('axios')


//express app
const app = express();


//connect to database
const dbURI = 'mongodb+srv://welangaieric:Barz05122018@blogs.5bh6ucn.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000, () => {
            console.log('database connected')
        })
    })
    .catch((err) => console.log(err))
//register view engine

app.set('view engine', 'ejs');

//middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// post routes
app.post('/new-blog',(req,res)=>{
    const blog =new Blogs(req.body);
    blog.save()
    .then((result)=>{
        res.render('newPost',{title:'New Blog',bg:'pink',success:'post added successfully'})
    
    })
    .catch((err)=>{
    
         res.send(err)
    // res.render('admin',{title:'admin',alert:`${err.keyValue.StdAdm} already exists`})

    });
})

app.post('/comment',(req,res)=>{
    const comment =new Comment(req.body);
    comment.save()
    .then(()=>{
        res.redirect('/blogs-read')    
    })
    .catch((err)=>{
    
         res.send(err)
    // res.render('admin',{title:'admin',alert:`${err.keyValue.StdAdm} already exists`})

    });
})
app.get('/comment',(req,res)=>{
    Comment.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
})
app.get('/new-blog',(req,res)=>{
    Blogs.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })

})
app.get('/blogs-read/:id',async(req,res)=>{
    let id = req.params
    let data = await Blogs.findById(req.params.id)
    // res.send(data)
    res.render('blog-details',{title:'read blog',bg:'pink',data:data})
    
})
// validation\
app.post('/validate',(req,res)=>{
    if(req.body.email==='ajevisally@gmail.com'&& req.body.password==='sally12@2023'){
        res.render('newPost',{title:'New Blog',bg:'pink'})
    }
    else{
        res.render('login',{title:'login',bg:'pink',alert:'Incorrect email or password'})
    }
})


//Page routes 
app.get('/', (req, res) => {
    res.render('index',{title:'Home',bg:'none'})
})
app.get('/about',(req,res)=>{
    res.render('about-us',{title:'About',bg:'pink'})
})
app.get('/blogs',(req,res)=>{
    res.render('blog',{title:'Blogs',bg:'pink'})
})
app.get('/blogs-read',(req,res)=>{
    res.render('blog-details',{title:'read blog',bg:'pink'})
})
app.get('/contact',(req,res)=>{
    res.render('contact',{title:'contact',bg:'pink'})
})
// app.get('/post',(req,res)=>{
//     res.render('newPost',{title:'New Blog',bg:'pink'})
// })
app.get('/login',(req,res)=>{
    res.render('login',{title:'login',bg:'pink'})
})
