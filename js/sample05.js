'use strict'

// Lets move closer to a real-life sceanrio
// but keep things syncronous here for now

function runDemo() {

    try {
        saveNumToDB(100)
    } catch (err) {
        alert(err.message)
    }
    console.log('Done')
}

function saveNumToDB(x) {
    var dbConn
    try {
        dbConn = connectToDB()
        dbConn.save(x)
    } catch (err) {
        console.log('BACKEND LOG: ', err.message)
        // Dont throw back the actual error - prevent Information Leakage (to hackers)
        throw new Error('OOPs, try again later')
    } finally {
        if (dbConn) dbConn.close()
    }
}

function connectToDB() {
    // console.log('BACKEND LOG: Cannot connect to DB with user: adminov')
    // throw new Error('Service Unavailable')
    return {
        save(num) {
            // console.log('BACKEND LOG: Reached storage limit on aws-s3-2204')
            // throw new Error('Cannot save num')
            console.log('Saving to DB:', num)
        },
        close() {
            console.log('Closing DB connection')
        }
    }
}