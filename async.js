// Async function to make a promise to resolve or reject the promise
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1500);
    });
    return promise;
}

// async code run when time runs out, calls the promise code and logs the result, chaining promises
setTimeout(() => {
    console.log("timer finished");
    fetchData().then(text => {
        console.log(text);
        return fetchData()
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

// synch code runs in procedural manner
console.log('Before Timer');