// 1.//

function isPrime(num){
      if (num === 2){
        return true;
      }

      if((num === 1) || (num % 2 === 0)){

            return false
      }
          
      for(var i = 3; i * i < num; i++ ){

          if(num % i === 0){
              return false;
          }
      }

      return true;
}

    console.log(isPrime(4));

    // 2.//

    function isPolindrom(str){
        var str2 = "";
        for (var i = str.length-1; i >= 0; i-- ){

               str2 += str[i];
        }

        if(str == str2){
            return true;
        }else{

            return false;
        }

    }

        console.log(isPolindrom("hello"));
        console.log(isPolindrom(""));

  //3. //
  
  function factorial(n){
   
        if( n < 1){
            return false;
        }

        var d = 1;
        var b = 1;
        while(b < n){
            d += b * d;
            b++; 

        }
          return d;
  }
      
        console.log(factorial(5));

// 4. //

function maxInArray(arr){

     var maxNum = arr[0];
     for(i = 0; i < arr.length; i++){

        if(arr[i] >= maxNum){
            maxNum = arr[i];
        } 
     }

      return maxNum;
}
    var arr1 =[5,4,-9,0,8,1];
    console.log(maxInArray(arr1));

    // 5. //

function NumSum(nums){

        nums = Math.abs(nums);
        var sum = 0;

        while(nums > 0){
            sum += nums % 10;
            nums = Math.floor(nums / 10); 
        }
        return sum;
}    

       console.log(NumSum(55));

// 6. //

function ReverseNum(num1){

    var rev = "";

    while(num1 > 0){

        rev += num1 % 10;
        num1 = Math.floor(num1 / 10);
    }

    return rev;
}

   console.log(ReverseNum(356));

// 7 //

function countVowels(stri){
        
         var count = 0;
         stri = stri.toLowerCase();

     for(var i = 0; i < stri.length; i++){
       
        if((stri[i] == "a") || (stri[i] == "i") || (stri[i] == "e" ) || (stri[i] == "o") || (stri[i] == "u")){

           count ++;
            
        }

     }
          return count;
}

    console.log(countVowels("grVECFacias"));
      
    // 8 . // 

    function fibonachi(numb){

        let a = 0;
        let b = 1;

        for(i = 2; i <= numb; i++){

            let temp = a + b;
                a = b;
                b = temp;
                
        }
          return b;
    }

    console.log(fibonachi(5));


    // 9 //

    function almostEqual(a, b, epsilon = 1e-10){
             return Math.abs(a - b) < epsilon;           

    }

    console.log(almostEqual(0.1 + 0.2, 0.3));

    // 10 //

    function toNumberORNaN(a){

        let num = Number(a);
        if(Number.isNaN(num)){
            return null;
        }

        return  num;
    }

    console.log(toNumberORNaN(NaN));
    console.log(toNumberORNaN("42"));