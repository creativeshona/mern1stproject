const dotenv = require ("dotenv")
const express = require ('express');
const cors = require ('cors')
const router = require('./routers.js')
const cookieparser = require('cookie-parser')
const app = express()

app.use(cookieparser())
app.use(cors())
dotenv.config({ path: "./config.env" });

require('./mongo.js')

app.use(express.json())
app.use(require('./routers.js'))

// const PORT = process.env.PORT || 8000 ;
if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))

}


// ______________or_____________________

// app.use('/router',router)



 app.listen(PORT,()=>{
    console.log(`port is runing on ${PORT}`)
})




























    middleware = (req,res,next)=>{
    // res.send("middleware")
    console.log("middleware")
    next();
}

// app.get('/' ,(req,res)=>{
//     res.send('This is home page')
//     console.log('home')
// })
// app.get('/about', middleware,(req,res)=>{
//     res.send('This is about page')
//     console.log('about')
// })
// app.get('/service' ,(req,res)=>{
//     res.send('This is service page')
// })
// app.get('/contact' ,(req,res)=>{
//     res.send('This is contact page')
// })
// app.get('/login' ,(req,res)=>{
//     res.send('This is login page')
// })


