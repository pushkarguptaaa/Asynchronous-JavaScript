let cnt= 0;

function counter(){
    setTimeout(()=>{
        console.log(cnt);
        cnt++;
        counter();
    },1000)
}

counter();
