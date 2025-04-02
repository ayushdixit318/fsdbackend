const http = require('http');
const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const data = await fetch('https://fakestoreapi.com/products');
    const jsonData = await data.json();
    const myhtml = `
    <html>
    <head>
        <title>My Products</title>
        <style>
            .container{
            border:1px solid black;
            background-color:black;
            color:white;}
                
        </style>
    </head>
    <body>
        <h1>Products</h1>
        ${
            jsonData.map((product)=>{
                    return ` <div class="container">
                        <h2>${product.title}</h2>
                        <p>${product.description}</p>
                        <p>$${product.price}</p>
                        <img src="${product.image}" height="200" width="150" alt="${product.title}" />
                        
                    </div>`;

                }).join("")
            }
        
    </body>
    </html>`;

    res.end(myhtml);

})

server.listen(9000, (err) => {
    if (err)
        throw err;
    console.log("Server is running at http://localhost:9000");
})