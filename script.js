const numbers = [2, 4, 5, 6, 8, 10, 20, 23, 30, 65, 98, 100]


//.some
function isLargerThan100 (n) {
    return n + 10 === 20
}

console.log('some case:', numbers.some(isLargerThan100))


//.reduce 
const sum = numbers.reduce((acc, val)=> {
    return acc + val;
}, 0)

console.log('reduce case:', sum)

//.filter

const filter = numbers.filter(function(value) {
    return value >= 15
})

console.log('filter cases:', filter)

//.mySome
Array.prototype.mySome = function (n) {
    for (let i = 0; i < this.length; i++) {
      if (n(this[i])){
        return true;
      }
    }
    return false;
  };
  
  function mySomeTrue(num) {
    return num >= 10;
  }
  function mySomeFalse(num) {
    return num >= 1000;
  }
  
  let mySomeCaseTrue = numbers.mySome(mySomeTrue);
  let mySomeCaseFalse = numbers.mySome(mySomeFalse);

  console.log('mySome true case:', mySomeCaseTrue);
  console.log('mySome false case:', mySomeCaseFalse);

  //.myReduce
  Array.prototype.myReduce = function () {
      let intVal = 0
      for (let i = 0; i < this.length; i++) {
          intVal = intVal + this[i];
      }
      return intVal;
  }
  const myReduceCase = numbers.myReduce();
  
  console.log('myReduce case:', myReduceCase);

  //.myFilter
Array.prototype.myFilter = function(n) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (n(this[i]) === true) {
      newArray.push(this[i])
    }
  }
   return newArray;
};

const results = numbers.myFilter(function(val) {
  return val % 2 === 1;
});

console.log('myFilter case:', results)