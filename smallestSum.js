function notSubsetOfSum(a){
	for(let i = 1; i < a.length; i++) {
	let sum = a[i] + a[i+1];
		if(!a.includes(i) && i != sum){
			return i;
		}
	}
}

console.log(notSubsetOfSum( [1, 3, 6, 10, 11, 15]));
