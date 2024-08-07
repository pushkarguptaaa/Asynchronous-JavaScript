function updateclock(){
    const now = new Date();
    const {t24, t12} = format(now);
    console.log(t24);
    console.log(t12);
}

function format(now){
    let h24 = now.getHours().toString().padStart(2,'0');
    let m = now.getMinutes().toString().padStart(2,'0');
    let s = now.getSeconds().toString().padStart(2,'0');
    let t24 = `${h24}:${m}:${s}`

    let h12 = now.getHours() % 12 || 12
    h12.toString().padStart(2,'0');
    let period = (now.getHours() >= 12) ? 'PM' : 'AM';
    let t12 = `${h12}:${m}:${s} ${period}`

    return {t24, t12};
}

setInterval(updateclock, 1000);
