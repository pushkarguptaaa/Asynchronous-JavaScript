let cnt= 0;

function count(){
    setInterval(()=>{
        console.log(cnt);
        cnt++;
    },1000);
}

count();