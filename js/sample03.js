'use strict'

// ReferenceError, SyntaxError and custom-errors
function runDemo() {
    // Throws ReferenceError
    // var x = y + 1
    
    // SyntaxError behave differently, 
    // here is a controlled way to generate a SyntaxError
    // we will further discuss eval() later on
    
    // eval("alert('Hi)")
    // saveNum(101)
    
    try {
    } catch (err) {
        console.error('Big Problem: ', err)
    }
    
    console.log('Done')
}

// Throwing custom-errors:
// *. To hide/abstract the error to higher level
// *. Throwing biz-logic related errors
function saveNum(x) {
    if (x > 100) throw new Error('Too Big!')
}







