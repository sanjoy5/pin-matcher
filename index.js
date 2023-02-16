
// get four digit random pin 
function getPin() {
    const pin = generateRandomPin()
    const pinString = pin + ''
    if (pinString.length === 4) {
        return pin
    } else {
        return getPin()
    }
}


// get random pin 
function generateRandomPin() {
    const random = Math.round(Math.random() * 10000)
    return random
}


document.getElementById('pin-generate-btn').addEventListener('click', function () {
    const pin = getPin()
    const randomPinField = document.getElementById('random-pin-field')
    randomPinField.value = pin
})



document.getElementById('calculator').addEventListener('click', function (e) {
    const number = e.target.innerText
    const typedNumbers = document.getElementById('typed-numbers')
    const previousNumber = typedNumbers.value

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbers.value = ''
        } else if (number === '<') {
            const digits = previousNumber.split('')
            digits.pop()
            typedNumbers.value = digits.join('')
        }
    } else {
        const newTypedNumber = previousNumber + number
        typedNumbers.value = newTypedNumber
    }

})


document.getElementById('verify-pin').addEventListener('click', function () {
    const randomPinField = document.getElementById('random-pin-field')
    const currentPin = randomPinField.value

    const typedNumberField = document.getElementById('typed-numbers')
    const typedNumber = typedNumberField.value

    if (typedNumber === currentPin) {
        document.getElementById('pin-success').style.display = 'block'
        document.getElementById('pin-danger').style.display = 'none'
        typedNumberField.value = ''
        randomPinField.value = ''
    } else {
        document.getElementById('pin-danger').style.display = 'block'
        document.getElementById('pin-success').style.display = 'none'
    }


})