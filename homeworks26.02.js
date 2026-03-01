// 1. //
function CharCount(str){

   return str.length;

}

   console.log(CharCount("Hello JavaScript"));

  // 2. //

function DoUppercase(str1){

   return str1.toUpperCase();

}  

   console.log(DoUppercase("javascript"));

// 3. // 

function sumOftwo(num1, num2){

    return num1 + num2;
} 

    console.log(sumOftwo(5,9));

// 4 //

function reversing(str2){

    let a = "";

    for (let i = str2.length - 1; i >= 0; i-- ){
        
       a += str2[i];
    }

    return a;
}

    console.log(reversing("return"));

    // 5. //

    function Checking(str){

         for(let i = 0; i < str.length; i++){

         if(str[i] == 'j' && str[i+1] == 'a' && str[i+2] == 'v' && str[i+3] == 'a'){

            return 'this string contains java';
             break;
         }
            
         }
           return "no";
    }

           console.log(Checking("learning javascript"));

// 6. // 
    
function IndexOfNine(arr){

    arr = [9,3,6,12,15];

      for(let i = 0; i < arr.length; i++){
 
             if(arr[i] == 9){

                return "the index of 9 is - " + i;
                break;
             }         
      }
            return "there is no number 9";
}

      console.log(IndexOfNine());

// 7. //

function SumOfArrVal(arr1){
  
  let count = 0;
  let sum = 0;  
  while(count < arr1.length){
      
      sum += arr1[count];
      count ++;
  }
      return sum
}

     let array1 = [5,9,49,2,0];
     console.log(SumOfArrVal(array1));

     // 8, //

     function subCheck(str1, str2){

        for(let i = 0; i < str1.length; i++){

            let found = true;

             for(let j = 0; j < str2.length; j++){

                    if(str1[i + j] !== str2[j]){

                         found = false;
                         break;
                    } 
             }
                   if(found){
                    return true;
                   }
        }
                  return false;
     }

     console.log(subCheck("hiJavascript", "saa"));

     // 9. //

     function arrSums(arr2){
        
        let sum = 0;

         for (let i = 0; i < arr2.length; i++){

              sum += arr2[i];
         }
         
        return sum; 
     }


     array2 = [5,39,8,20,1];
     console.log(arrSums(array2));

     // 10. //

     function EvenOdd(numb){

        if(numb < 1){
           
            return "your number can't be even or odd its less than 1";

        }

        if( numb % 2 !== 0){

            return 'odd';

        }else{
            
            return 'even';
        }
     }

     console.log(EvenOdd(11));

     // 11 //

     function typeRturn(types){

        if(types === null){ return "null"};
        if(Array.isArray(types)){ return "array"};
        return typeof types;
     }

     let a = [];
     console.log(typeRturn(a));

     // 12.//

     function Falsy(value) {
    if (value === 0) return true;
    if (value === "") return true;
    if (value === null) return true;
    if (value === undefined) return true;
    if (typeof value === "number" && isNaN(value)) return true;
    if (value === false) return true;

    return false;
}

   console.log(Falsy(0 / 0));

   // 13 . //

function Compare(a,b){

    return {
        loose_result : a == b,
        strict_result : b === a,
    };
}   

    console.log(Compare("9",9));

    //14,//

    function Typecheck(value) {

    if (typeof value !== "number") {
        
        return false;
    }

    if (Number.isNaN(value)){

        return false;

    } 

    if (value === Infinity || value === -Infinity){ 
        
        return false;
    }
    
    if (value % 1 !== 0){ 
        
        return false;
    }

    if (value > 9007199254740991 || value < -9007199254740991){ 
        
        return false; 
    }

    return true; 
}

console.log(Typecheck(8989889855445885558));
console.log(Typecheck("hi"));

//15//

function CheckIfNaN(num){

    let num1 = Number(num);

    if(Number.isNaN(num1)){
  
        return null;

    }

    return num1;

}

    console.log(CheckIfNaN("9"));
    console.log(CheckIfNaN(false));
    console.log(CheckIfNaN("str"));

    // .16 //

function Boolean(val){

    return !!val;

}

    console.log(Boolean(""));
    console.log(Boolean(2));

    // 17. //

function PlainObject(val1){

    if((typeof val1 === 'object') && (!Array.isArray(val1)) && (typeof val1 !== 'function') && (val1 !== null)){

        return true;
    }else{

        return false;
    }  

}   

    console.log(PlainObject({}));
    console.log(PlainObject(null));
   
// 18. //

function Primitive(values1){

    if((values1 === null) || (typeof values1 !== "object" &&  typeof values1 !== "function")){

        return true;

    }else{

        return false;
    }
}


    console.log(Primitive(null));
    console.log(Primitive(5));
    console.log(Primitive({}));

// 19.//

function IfNum(vals1, vals2){

    if(typeof vals1 === "number" && typeof vals2 === "number"){

        let a = vals1 + vals2;
        return a;
    }else{

        return "invalid";
    }

}


  console.log(IfNum(5,9));
  console.log(IfNum(6,"9"));