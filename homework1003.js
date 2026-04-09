// 1 //

let person1 = {
    name: "Ano",
    surname:"Agasyan"
    
}

let person2 = {
    name: "Ando",
    age:  25

}

let mergedPerson = Object.assign({},person1, person2);
console.log(mergedPerson);


// 2 //
(function(){
//'use strict';//
let student = {

    name : "Erik",
    age : 29
}

  Object.freeze(student);
  
  student.age = 25;
  console.log(student);

})();

// 3 // 

 let obj1 = {

    room: 15,
    price: 30000
 }

  let isTrue = true;

  if(isTrue){
    
    obj1.busy = 1
  }

  console.log(obj1);


  // 4 // 

  let obj2 = {};

  let arrkey = ["name","surname","age"];
  let arrval = ["Hamo","Saribekyan","55"];

  for(let i = 0; i < arrkey.length; i++){

      obj2[arrkey[i]] = arrval[i];
  }

  console.log(obj2);

  // 5 //

  let forLoop = {

    brand : 1,
    year : 1955,
    count :9
  }

   for (let key of Object.keys(forLoop)){

    console.log(`key : ${key},\n value : ${forLoop[key]}`);


   }

   //6//

    let obj3 = {

        count : 3,
        length : 2.5,
        status : "yes"
    }

    let arrTemp = Object.entries(obj3);

    let newFilt = arrTemp.filter(function([key,value]){

        return typeof(value) === "number";

    });

    let rest = Object.fromEntries(newFilt);

    console.log (rest);

     //7//

     function isEqual(obj1, obj2){

        return JSON.stringify(obj1) === JSON.stringify(obj2);

     }

     let ab = {
        name : "Areg",
        surname : "Johnson"
     }

     let ba = {
        name :"Aren",
        surname : "Johnson"
     }

      console.log(isEqual(ab , ba));
