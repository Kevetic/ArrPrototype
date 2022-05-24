const numbers = [2, 4, 6, 8, 10, 20, 30 ,100]


//.some
function isLargerThan100 (n) {
    return n + 10 === 20
}

console.log(numbers.some(isLargerThan100))


//.reduce 
const sum = numbers.reduce((acc, val)=> {
    return acc + val;
}, 0)

console.log('sum:', sum)

//.filter

const filter = numbers.filter(function(value) {
    return value >= 15
})

console.log(filter)