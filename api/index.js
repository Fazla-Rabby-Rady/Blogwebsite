const express=require('express')
const app=express()
const cors = require('cors')
const port=5000

const mongoose=require('mongoose');

const authRouter=require('./routes/Auth')
const userRouter=require('./routes/Users')
const postRouter=require('./routes/Posts')
const categoryRouter=require('./routes/Categories')

const multer = require('multer')


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/blog_website").then(()=>{
    console.log('connected mongodb')
}).catch((error)=>{
    console.log(error)
})

    const storage = multer.diskStorage({
        destination:(req,file,cb)=>{
            cdb(null,'images')
        },filename:(req,file,cb)=>{
            cb(null,req.body.name)
        }
    })

    const upload = multer({storage:storage});
     
    app.post("/api/upload",upload.single("file"),(req,res)=>{
        res.status(200).json("File has been uploaded")
    })
 
app.use(cors());

app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
app.use('/api/posts',postRouter);
app.use('/api/categories',categoryRouter)

app.listen(port,()=>{
    console.log(`Backend server is running at http://localhost:${port}`)
})