'use strict'

// Finally
   
function runDemo() {
    try {
        foo()
        console.log('foo() was successful')
    } catch(err) {
        alert(err.message)
    }
    console.log('Done')
}

function foo() {
    var num = 4
    try {
        num.toLowerCase()
        console.log('Never run')
    } catch (err) {
        console.log('Had a problem:', err.message)
        // throw err
    } finally {
        console.log('Always run')
    }
    console.log('Hi')
}
