Function.prototype.myCall = function (thisArg, ...args) {

    thisArg = thisArg ?? globalThis;

    const key = Symbol();

    thisArg[key] = this;
    
    const result = thisArg[key](...args);

    delete thisArg[key];

    return result;



}

function example1(year){

    console.log(this.name + " is  " + year +" years old");

}

  let user = {name : "Aram"};

  example1.myCall(user, 29);


  Function.prototype.myApply = function(thisArgs, args){

       thisArgs = thisArgs ?? globalThis;

       thisArgs.foo = this;

       const res = thisArgs.foo(...args);

       delete thisArgs.foo;

       return res;


  }


  function showInfo(city, country) {
   return `${this.name} lives in ${city}, ${country}`;
   }

       const user1 = { name: "Joe Doe" };

       console.log(showInfo.myApply(user1, ["New-York", "USA"]));



         Function.prototype.myBind = function (thisArg, ...boundArgs) {
         const exm = this;

         return function (...laterArgs) {
         return exm.apply(thisArg ?? globalThis ,[...boundArgs, ...laterArgs]);
  };
};


function showInfo(city, country) {
  return `${this.name} lives in ${city}, ${country}`;
}

const user2 = { name: "Joe Doe" };

const boundShowInfo = showInfo.myBind(user2, "New York");

console.log(boundShowInfo("USA"));
