function sleep(milliseconds) {
    return new Promise(res=> setTimeout(res, milliseconds));
}

console.log(sleep(5000));

module.exports = sleep;
