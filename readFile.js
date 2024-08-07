const fs = require('fs');

const file= 'a.txt'

function readFile(file){
    fs.readFile(file, 'utf8', (err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    })
}

readFile(file);

for(let i=0; i<100000; i++){
    console.log(i);
}




