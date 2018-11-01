function substring (string, word) {
    let count = 0;
    let splitted = string.split(' ');
    splitted.forEach(element => {
        if(element == word){
            count++;
        }
    });
    return count;
}

console.log(substring('the quick brown fox the','the'));
