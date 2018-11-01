function nthLarge (array, n) {
    swap(array);
    let nthLargest = array.splice(n-1,1);
    return nthLargest;
}

//console.log(nthLarge([40,20,30], 3));
//console.log(nthLarge([25, 40, 35, 15, 86, 55],4));

function swap (array){
    for(let i = 0; i < array.length; i++){
        if(array[i+1] < array[i]){
            let middle = array[i];
            array[i] = array[i+1];
            array[i+1] = middle;
            swap(array);
        }
}
}

console.log(nthLarge([10, 50, 30, 40, 60, 20],3));
