var promise1 = new Promise(function(resolve, reject) {
    var r = Math.ceil(Math.random() * 10);
    if (r % 2 === 0) {
        setTimeout(function() {
            resolve('even');
        }, 300);
    } else {
        setTimeout(function() {
            reject('odd');
        }, 300);
    }
});
promise1
    .then(function(value) {
        console.log("Success: " + value);
    })
    .catch(function(err) {
        console.log("Error: " + err);
    });
console.log(promise1); // this line will execute before promise resolves or rejects