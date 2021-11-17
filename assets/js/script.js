// TODO: Declare any global variables we need
let tails = document.querySelector('#tails')
let heads = document.querySelector('#heads')
let headsPercent = document.querySelector('#heads-percent')
let tailsPercent = document.querySelector('#tails-percent')
let tailsNumber = 0
let headsNumber = 0
let headsPercentNumber = 0
let tailsPercentNumber = 0
let flipTotal
let clearButton = document.querySelector('#clear')
//= headsNumber + tailsNumber

let side = document.querySelector('#pennyImage')
let flipButton = document.querySelector('#flip')
//let rolledValue = Math.ceil(Math.round(Math.random() * 1))




document.addEventListener('DOMContentLoaded', function () {

    flipButton.addEventListener('click', function() {
        let rolledValue = Math.ceil(Math.round(Math.random() * 1))
        
        if (rolledValue == 0) {
            document.querySelector('#pennyImage').src = 'assets/images/penny-tails.jpg'
            document.querySelector('#message').textContent = 'Tails'
            document.getElementById('tails').innerHTML = tailsNumber = tailsNumber + 1
            flipTotal = headsNumber + tailsNumber
            //tailsPercentNumber = flipTotal / tailsNumber
            //tailsPercent.textContent = tailsPercentNumber

            //document.getElementById('tails-percent').innerHTML = Math.round((tailsNumber / flipTotal) * 100)
        } else {
            document.querySelector('#pennyImage').src = 'assets/images/penny-heads.jpg'
            document.querySelector('#message').textContent = 'Heads'
            document.getElementById('heads').innerHTML = headsNumber = headsNumber + 1
            flipTotal = headsNumber + tailsNumber
            //headsPercentNumber = flipTotal / headsNumber
            //headsPercent.textContent = headsPercentNumber
            //document.getElementById('heads-percent').innerHTML = Math.round((headsNumber / flipTotal) * 100)
            
        }
        
        tailsPercentNumber = flipTotal / tailsNumber
        headsPercentNumber = flipTotal / headsNumber
        document.getElementById('heads-percent').innerHTML = Math.round((headsNumber / flipTotal) * 100) + "%"
        document.getElementById('tails-percent').innerHTML = Math.round((tailsNumber / flipTotal) * 100) + "%"
        console.log(rolledValue)
      
        

        clearButton.addEventListener('click', function () {
            tailsNumber = 0
            headsNumber = 0
            document.getElementById('heads').innerHTML = 0
            document.getElementById('tails').innerHTML = 0
            document.getElementById('tails-percent').innerHTML = 0
            document.getElementById('heads-percent').innerHTML = 0

        })



    })



    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})