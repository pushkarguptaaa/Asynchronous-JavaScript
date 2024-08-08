function wait1(t) {
    return new Promise(res=> setTimeout(res, t*1000))
}

function wait2(t) {
    return new Promise(res=> setTimeout(res, t*1000))
}

function wait3(t) {
    return new Promise(res=> setTimeout(res, t*1000))
}

async function calculateTime(t1, t2, t3) {
    const start = Date.now();
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    const end = Date.now()
    return end - start
}

calculateTime(2,3,2).then(res=> {
    console.log(res)
})

module.exports = calculateTime;
