const fs = require("fs");

const textin = fs.readFileSync("try.txt", "utf-8");
console.log(textin);

const textout=`${textin} Btw my name is Roshan..\n`;
fs.writeFileSync('output.txt',textout);
console.log('done');
