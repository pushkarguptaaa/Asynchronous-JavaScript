function wait(n) {
    return new Promise(res=> setTimeout(res, n*1000))
}

wait(3).then(()=>{
    console.log(`3 secs have passed`);
})

module.exports = wait;
