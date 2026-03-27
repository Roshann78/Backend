const fs=require('fs');

fs.readFile('fl1.txt','utf-8',(err,data)=>{
    if(err) return console.log('ERROR');
    fs.readFile(`${data}.txt`,'utf-8',(err,data1)=>{
        console.log(data1);
        fs.readFile('fl3.txt','utf-8',(err,data2)=>{
            console.log(data2);
            fs.writeFile('fl4.txt',`${data1}\n${data2}`,'utf-8',err=>{
                console.log('File Written');
            });
        });
    });
});

console.log('reading');