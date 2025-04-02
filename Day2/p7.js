const http=require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url=='/home')
        res.end('Welcome to Home Page \n');
    if(req.url=='/contact')
        res.end('Contact Us Page\n');
    if(req.url=='/about')
        res.end('This is About Page\n');
       

    
})