const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(`<h1 style="background-color:red ;color:white ">Hello World</h1>`);
});
server.listen(9000,(err)=>{
    if (err)
        throw err;
    console.log("Server is running at http://localhost:9000");
}
)