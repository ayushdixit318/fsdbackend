const http=require("http")
const Users=[
    {id:1,name:"John",age:30},
    {id:2,name:"Doe",age:25},
    {id:3,name:"Smith",age:35}
]
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(Users.map((user)=>{return {name:user.name}})));
});
server.listen(9001,()=>{
    console.log("Server is running at http://localhost:9001");
})