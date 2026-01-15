/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let ans = init;
    return{
        //criar função increment, deve retornar o valor somado a 1, não recebe parâmetro
        //criar função decrement, deve retornar o valor subtraido por 1, não recebe parâmetro
        //reset, torna o valor igual ao init

        increment: () => {
            ans++;
            return ans;
        },

        decrement: () => {
            ans--;
            return ans;
        },

        reset: () => {
            ans = init;
            return ans;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */