/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
        let counter = 0
    return function() {

       ans = n + counter;
       counter++
       
        
        return ans
       
    };
};

let result = createCounter(10);
console.log(result);

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */