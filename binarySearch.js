function binary(array, value) {
    var low = 0, high = array.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (array[mid] == value) return mid;
        else if (array[mid] < value) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
console.log(binary([2, 5, 3, 4, 67, 8], 8));