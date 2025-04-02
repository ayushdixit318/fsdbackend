const http=require('http');
const { stringify } = require('querystring');
const server=http.createServer(async(req,res)=>{
    const data= await fetch("https://dummyjson.com/products");
    res.jsonData=await data.json();
    const products=jsonData.products;
    res.setHeader('Content-Type', 'text/plain');
    const tiles=products.map((ele)=>{
        return ele.title;

    })
    res.end(JSON.stringify(tiles));
})
server.listen(3000, (err) => {
    if (err) {
        throw err;

    }
    else
        console.log('Server running https://localhost:3000');
})