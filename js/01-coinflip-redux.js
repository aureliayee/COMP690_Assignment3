let coinFlip
let numFlips = parseInt(prompt('How many times do you want to Flip the coin?'))

for (let index = 0; index < numFlips; index++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}