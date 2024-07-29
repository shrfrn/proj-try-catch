'use strict'

// Now Lets go async

function runDemo() {
    doSomethingRisky()
        .then(res => console.log('Success: ', res))
        .catch(err => alert(err))
        .finally(() => console.log('Always run'))
}

function doSomethingRisky() {
    return Promise.resolve(100)
    // return Promise.reject('Nope')
}