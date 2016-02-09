'use strict'

var minNumber = 0
var maxNumber = 10

function randomNumberGenerator (minNumber, maxNumber) {
  if ( typeof minNumber === 'number' && typeof maxNumber === 'number') {
    return Math.floor( Math.random() * (maxNumber - minNumber + 1) ) + minNumber
  }
}

function checkResult (myNumber, theirNumber) {
  var result = 'Your number is '
  if (myNumber === theirNumber) return result + 'correct.'
  else if (myNumber > theirNumber) return result + 'too low. Guess again.'
  else return result + 'too high. Guess again.'
}

function buttonClicked () {
  var theirNumber = Number(document.querySelector('input').value)
  var result = checkResult(myNumber, theirNumber)
  document.querySelector('#result').textContent = result
  console.log(theirNumber)
  console.log(result)
}

var myNumber = randomNumberGenerator(minNumber, maxNumber)

document.querySelector('button#submit').addEventListener('click', buttonClicked)
