const exp=require('express')
const { request } = require('https')
const app=exp()
const mclient=require("mongodb").MongoClient
const cors = require('cors');

app.use(cors());
mclient.connect('mongodb://127.0.0.1:27017/27017')
.then(dbref=>{
    //get database obj
    let dbobj=dbref.db('fitness')
    let exe=dbobj.collection("exe1")
    app.set("exe",exe)
    console.log("susses")
})
.catch(err=>console.log("dberr",err))

app.use(exp.json());

const path=require("path")
app.use(exp.static(path.join(__dirname,"./build")))

app.listen(4000,()=>console.log("server lisineg... at 4000"))


app.post("/get-data",(request,response)=>{
    const exe=request.app.get("exe");
    const extdata=request.body;
    exe.findOne({
    "Health Status": extdata.health,
    "Goal": extdata.goal,
    "Category": extdata.cat
    })
    .then((data)=>{
        response.status(201).send({message:"days info",payload:data})
        console.log(data);
    })
    .catch((err)=>{
        console.log("err is",err);
        response.send({message:"error",reason:err.message});
    })
    
})


//refresh
app.use('/*',(request,response,)=>{
    response.sendFile(path.join(__dirname,"./build","index.html"))
})

//error handling
const erh=(error,request,response,next)=>{
    response.send({"error-message":error.message});
};
app.use(erh)