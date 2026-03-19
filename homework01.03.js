// 1 /// 

function isEven(val){

     if(val % 2 === 0 || val === 0){
        return true;
     } else{
        return false;
     }
}

console.log(isEven(4));
console.log(isEven(-4));
console.log(isEven(7));
console.log(isEven(0));

//2 //

function sumUpTo(n){
   n = Math.abs(n);
    let count = 0;
    for(i=0; i<=n; i++){
        count += i;
    }
    return count;
}

console.log(sumUpTo(5));
console.log(sumUpTo(0));
console.log(sumUpTo(-7));

// 3 //

function minInArray(arr){
    
    let min = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

console.log(minInArray([-7,5,9,0,-5,5]));


// 4 // 

function countNumbers(num){

   num = Math.abs(num);
   let count = 0;
   do{
    count++;
    num = Math.floor(num / 10);
   }while(num > 0);

   return count;
}

console.log(countNumbers(5987));
console.log(countNumbers(0));
console.log(countNumbers(-59));


// 5 //

function sumArray(arr){

    let sumar = 0;
    for(i = 0; i < arr.length; ++i){
        sumar += arr[i];
    }
     return sumar;
}

console.log(sumArray([-7,0,-6,5,]));

// 6 //

function average(arr){
    let sum = 0;
    let averages = 0; 
    for(i =0; i < arr.length; i++){

        sum += arr[i];
    }
     averages = sum / arr.length;
     return averages;
}

console.log(average([15,9,-7,9,0,-5]));

// 7 //

function countChar(char,str){
    
    let count = 0;
    for(i = 0; i < char.length; i++){

        if(char[i] === str){
            count++;
        }
    }
    return count;
}

console.log(countChar("hello mall","l"));
console.log(countChar("1589998", "8"));

// 8 //

function removeFirstChar(char){
    let newChar = "";
    if (char.length < 2){
        return newChar;
    }
    for(i=1; i < char.length; ++i){
        newChar += char[i];
    }
    return newChar;
}

console.log(removeFirstChar(""));
console.log(removeFirstChar("G"));
console.log(removeFirstChar("rembo"));

//9 //


function power(num,pow){
    if(pow < 1){
        return 1;
    }
    let result = 1;
    while(pow > 0){
        pow--;
        result *= num;
        
    }
    return result;
}

console.log(power(5,1));
console.log(power(4,-5));
console.log(power(4,3));

// 10 // 

function containsValue(arr,val){

    for(i = 0; i < arr.length; ++i){
        if(arr[i] === val){
            return true;
            break;
        }
    }
    return false;
}


console.log(containsValue([1,2,3,4],5));
console.log(containsValue(["as","hel",5],"hel"));
console.log(containsValue([1,2,3,4,0],0));

//11//

function repeatStr(str,count){

    let newStr = "";
    for(i = 0; i < count; i++){
        newStr += str;
    }
    return newStr;
}

console.log(repeatStr("he",2));
console.log(repeatStr("",3));

// 12 //

function firstAndLast(arr){
    
    let arr2 = [];
    arr2 = [arr[0],arr[arr.length-1]];
    return arr2;
}

console.log(firstAndLast([1,2,5,9]));
console.log(firstAndLast([1]));
console.log(firstAndLast([]));

