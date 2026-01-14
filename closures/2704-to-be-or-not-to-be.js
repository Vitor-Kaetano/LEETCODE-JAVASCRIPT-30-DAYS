/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    //criar função tobe
    //criar função nottobe
    //testar valor recebido
    return{
        toBe: function(val2){
            if (val === val2)return true;
            throw new Error("Not Equal"); },
        notToBe: function(val2){
            if (val !== val2)return true;
            throw new Error("Equal"); }
    };
    
        
    }
    


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */