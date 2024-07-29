'use strict'

// Throwing from functions

function runDemo() {
    foo()
    // try {
    //     console.log('foo() was successful')
    // } catch (err) {
    //     alert('Big Problem: ' + err.message)
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