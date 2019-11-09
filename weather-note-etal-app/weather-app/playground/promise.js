// let somePromise = new Promise((resolve, reject) => {
//     resolve('hey it worked');
// })

// somePromise.then((message) => {
//     console.log('success', message)
// })

let asyncPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b)
            } else {
                reject('input must be an integer')
            }
        }, 2000)
    })
}

asyncPromise(2, 8).then((data) => {
    return asyncPromise(data, 10)
})
    // .catch((err) => {
    //     console.log(err)
    // })
    .then((data) => {
        console.log('output should be 20: ', data)
    }).catch(err => console.log(err))