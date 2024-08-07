const fs= require('fs');

const file = 'a.txt';
const data= 'Hello again'

function writeFile(file, data){
    fs.writeFile(file, data, 'utf-8', (err)=>{
        if(err) console.error(err);
        console.log("written");
    })
}

writeFile(file, data);