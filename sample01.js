'use strict'

// The Basics

function onDrink() {
    var num = 4
    num.toLowerCase() 
    
    try {
        console.log('Never run')
    } catch(err) {
        console.log('Had a problem', err)
    }
    
    console.log('Done')
}