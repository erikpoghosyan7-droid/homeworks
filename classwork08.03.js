// 1 // 

function myIsNaNValue(value){

    return value !== value;
}

console.log(myIsNaNValue(NaN));


// 2 //

  function myIsFinite(val){

    return ( 
        typeof val === 'number' &&
        !Number.isNaN(val) &&
        val !== +Infinity &&
        val !== -Infinity

    );

}

   console.log(myIsFinite(Infinity));


   // 3 //

    function isMyInteger(val){

        return (
          typeof val === 'number' &&
          val % 1 === 0 && 
          Math.abs(val) !== Infinity
        );
    } 

    console.log(isMyInteger("sas"));
    console.log(isMyInteger(5));
    

    // 4 // 

    function myIsSafeInteger(vals){

        if((vals < 9007199254740991) && vals % 1 === 0 ){
            return true;
        }else{
            
             return false;
        }
          
    }

    console.log(myIsSafeInteger(111111111111111111111))
    console.log(myIsSafeInteger(5));

    // 5//

    function myStartsWith(mainStr, str1){

        for(let i = 0; i < str1.length; i++){
            
            if(str1[i] !== mainStr[i]){

                return false;
            }
        }
        return true;
    }

    console.log(myStartsWith("string", "str"));
    console.log(myStartsWith("javas", "av"));

    // 6 //

    function myEndsWith(mainStr1, str2){

        for(let i = mainStr1.length -1; i >= mainStr1.length - str2.length - 1; i--){
            
            if(str2[i] !== mainStr1[i]){

                return false;
            }
        }
        return true;
    }

    console.log(myEndsWith("string", "ing"));
    console.log(myEndsWith("javas", "av"));

    // 7 //

    function myIndexOf(str1, str2){

        for(let i = 0; i <= str1.length - str2.length; i++){
            
            let ind = true;
                
            for(let j = 0; j < str2.length; j++){
               
                if(str1[i + j] !== str2[j]){
                    ind = false;
                    break;
                }

            }

            if(ind){
             return i;    
               }
        }
    }

         console.log(myIndexOf("string", "ostring"));

 //8//
 
   function mySlice(strs, a, b){

        let str = "";

           for(let i = a; i <= b; i++){
               
              str+=strs[i];
              
           }

          return str;
   }

   console.log(mySlice("hellomoto", 1, 6));

   // 9 // 

   function myRepeat(str, count){

    let cro = "";

      for(let i =0; i < count; i++){

          cro += str;
      }
         return cro;
   }

   console.log(myRepeat("hae", 3));