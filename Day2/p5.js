const http=require('http');
const fs = require('fs/promises');
const server =http.createServer(async(req,res)=>{
    const data=await fs.readFile('/data.json');
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const names=data.map((name)=>{
        return ele.name;

    })
    console.log(JSON.stringify(names));
    res.end(JSON.stringify(names));
})
server.listen(9099,(err)=>{
    if(err)
        console.log("Error: "+err)
    console.log('Server is running at https://localhost:9099/');

});