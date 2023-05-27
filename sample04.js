'use strict'

// Finally
   
function onDrink() {
    try {
        foo()
        console.log('foo() was successful')
    } catch(err) {
        console.log('External Handler:', err)
    }
    console.log('Done')
}

function foo() {
    var num = 4
    try {
        num.toLowerCase()
        console.log('Never run')
        // baba = 9
        // return 17
    } catch (err) {
        console.log('Had a problem:', err.message)
        throw err
    } finally {
        console.log('Always run')
    }
    console.log('Hi')
}
