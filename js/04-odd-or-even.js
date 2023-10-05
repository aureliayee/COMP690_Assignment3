let num = -1
let oddEven

while (num < 15) {
    num++
    if(num % 2 == 0) {
        oddEven = "even"
    } else {
        oddEven = "odd"
    }
    console.log(`${num} is ${oddEven}`)
}
