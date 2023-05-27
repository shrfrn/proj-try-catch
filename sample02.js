'use strict'

// Throwing from functions

function onDrink() {
    foo()
    // try {
    //     console.log('foo() was successful')
    // } catch (err) {
    //     console.log('Big Problem: ', err)
    // }
    console.log('Done')
}

function foo() {
    var num = 4
    try {
        num.toLowerCase()  // Throws a TypeError
        console.log('This will never run.')
    } catch (err) {
        console.log('Had an error: ', err.message)
        // throw err
        // throw new Error('Not now')
        // Never sliently ignore errors
    }
}










