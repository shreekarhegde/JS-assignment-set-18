function common(a,b,c) {
    console.log(a,b,c);
    let store = [];
   for(let i = 0; i < a.length; i++){
       for(let j = 0; j < b.length; j++){
           for(let k = 0; k < c.length; k++){
               if(a[i] == b[j] && b[j] == c[k]){
                   store.push(a[i]);
               }
           }
       }
   }
   return store;
}

console.log(common([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120]));