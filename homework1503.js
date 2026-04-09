 // 1 //

function curry(cb) {
  return function curried(...args) {


    if (args.length >= cb.length) {
      return cb(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };

  };
}


const sum = (a, b, c) => a + b + c;
const product = (a, b, c, d) => a * b * c * d;

const sumFunc = curry(sum);
const prodFunc = curry(product);

console.log(sumFunc(1)(2, 3));     
console.log(sumFunc(1, 2)(3));     
console.log(sumFunc(1, 2, 3));     
console.log(prodFunc(1, 2, 3, 4)); 
console.log(prodFunc(1)(2, 3, 4)); 
console.log(prodFunc(1, 2)(3, 4)); 
console.log(prodFunc(1, 2, 3)(4)); 

// 2 //

function memoize(cb) {

  const newObj = {};

  return function(arg) {

    if (newObj[arg] !== undefined) {

      console.log("from cache");

      return newObj[arg];
    }


    const result = cb(arg);

    newObj[arg] = result;

    return result;
  };
}


function factorial(a) {
  let res = 1;
  for (let i = 2; i <= a; ++i) {
    res *= i;
  }
  return res;
}

const foo = memoize(factorial);

console.log(foo(5)); 
console.log(foo(5));
console.log(foo(6)); 
console.log(foo(6));
console.log(foo(7));


// 3 // 


function pipe(...funcs) {
    
     return function(val){

      let strt = val;

     for(let i = 0; i < funcs.length; ++i){

       strt = funcs[i](strt);
     } 
       return strt;
     }


}


const add5 = a => a + 5;
const double = a => 2 * a;
const sub4 = a => a - 4;

const func = pipe(add5, add5, double, sub4); // 20
console.log(func(2));


// 4// 

function trace(cb) {
  const history = [];

  function wrapper(...args) {
    const result = cb(...args);

    history.push({
      args: args,
      output: result
    });

    return result;
  }

  wrapper.history = history;

  return wrapper;
}


function foo1(a, b) {
 return a + b;
}


const tracedFunc = trace(foo1);
console.log(tracedFunc(1, 2)); //3
console.log(tracedFunc(2, 4, 6)); //6

console.log(tracedFunc.history);