const fs=require('fs');

fs.readFile('inp.txt','utf-8',(err,data)=>{
    console.log(data);
});
console.log('reading');