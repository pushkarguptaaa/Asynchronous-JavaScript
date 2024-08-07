const fs= require('fs');

const file= 'a.txt';

function cleanFile(file){
    fs.readFile(file, 'utf8', (err,data)=>{
        if(err) console.error(err);

        const cleaned= data.replace(/\s+/g, ' ').trim();

        fs.writeFile(file, cleaned, 'utf8', (err)=>{
            if(err)console.error(err);

            console.log('cleaned');
        })
    })
}

cleanFile(file);