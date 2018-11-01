let store = [];
function flatten(a) {
    a.forEach(element => {
        if (Array.isArray(element)) {
            flatten(element);
        } else {
            store.push(element);
        }
    })
    return store;
}

console.log(flatten([1, [2, [3]]]));
//console.log(flatten([1, [2], [3,[4,5]]]));

