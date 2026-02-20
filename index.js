import express from "express";
import sum from "./sum.js"


const port =  8080;
const app = express()


app.use(express.json())

app.get("/home",async(req,res)=>{
    res.json({
        mes:"good"
    }
    )
})

app.get("/getsum/:a/:b",(req,res)=>{
    let {a,b} = req.params
    res.json({
        result:sum(parseInt(a),parseInt(b))
    })
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})