'use strict'

// Global Error Handler

window.onerror = (err) => {
    console.log('Global error handler:', err)
    console.log('Reporting to Logging server')
}

function onDrink() {
    unknown = 100
    try {
        if(true) throw 'baba'
    } catch (err) {
        console.log('Big Problem: ', err)
    }
    console.log('Done')
}