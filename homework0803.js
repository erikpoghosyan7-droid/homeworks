function forEach1(array, callback) {

  for (let i = 0; i < array.length; i++) {

    callback(array[i], i, array);

  }

    
}

  forEach1([1,2,3,55], function(value, index) {
  console.log(value, index);
});


function map1(array,callback){
       
        let newarr = [];
         for(let i = 0; i < array.length;i++){
   
         let val = callback(array[i],i,array);
         newarr.push(val);
            
    }

    return newarr;
}

    
   let example = map1([2,6,10],function(x) {
     return x++ ;
   });
    console.log(example);

    

