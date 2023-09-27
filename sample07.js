'use strict'

// Now Lets go async

function onDrink() {
    doSomethingRisky()
        .then(res => console.log('Success: ', res))
        .catch(err => alert(err))
        .finally(() => console.log('Always run'))
}

function doSomethingRisky() {
    return Promise.resolve(100)
    // return Promise.reject('Nope')
}

// async function onDrink() {
//     try {
//         const res = await doSomethingRisky()
//         console.log('Success: ', res)
//     } catch (err) {
//         console.error('Error:', err.message)
//     } finally {
//         console.log('Always run')
//     }
// }

// async function doSomethingRisky() {
//     return 100
//     // throw new Error('Nope')
// }
