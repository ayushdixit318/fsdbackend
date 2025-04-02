const express = require('express');

const app = express();
app.use(express.json());
let users = [
    
]

app.get('/users',(req,res) =>{
    res.json(users);
})

app.post('/users',(req,res) =>{
    const data = req.body;
    const newid=users.length>0?users[users.length-1.].id+1:1;
    data.id=newid;
    users.push(data);
    res.status(200).json({message:'Data Received',data:data});
})

app.listen(9000,()=>{
    console.log("Server is running on port 9000");
})