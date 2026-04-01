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
      return x+=2 ;
      });

      console.log(example);


function filter1(array, callback){
     
       let newarr = [];
       for(let i = 0; i < array.length; i++){
        
       if(callback(array[i], i, array)){
           newarr.push(array[i]);
       }
       
    }

    return newarr;
}

     
      let example1 = filter1([2,9,12,4,7], function(x){

            return (x % 2 === 0);
      });

      console.log(example1);



function some1(array, callback){
         
       let bol = false;
       for(let i = 0; i < array.length; i++){
        
          if(callback(array[i], i, array)){
             
             bol = true;
             
              
         }
            
    }

    return bol;
}

     
      let example2 = some1([7,9,11,1,-3], function(x){

            return (x % 2 === 0);
      });

      console.log(example2);

    
   function myEvery(array,callback){

       let res = true; 
       for(let i = 0; i < array.length; i++){

           if(!callback(array[i], i, array)){
               
              res = false;

           }
       }
           return res;

   }       

   let ever = myEvery([1,5,7,9], function(x){

         return x < 9;
   });

   console.log(ever);


   function myIndexof(array, searchElement){

      let strres = -1;
       for(i = 0; i < array.length; i++){
          
           if(searchElement===(array[i])){

               strres = i;
           }
       }
          
          return strres;
   }


   let exm = myIndexof([1,5,8,3,2,5], 1);
   console.log(exm);
