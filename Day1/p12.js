const  fs=require("fs/promise");
const read=async()=>{
    const data=await fs.readFile("./data.txt","utf8");
    console.log(data);
}
read();
console.log("I am after reading data");