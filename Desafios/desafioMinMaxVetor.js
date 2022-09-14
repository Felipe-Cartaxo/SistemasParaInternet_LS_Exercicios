function min_array(array) {
    let len = array.length
    let min_value = array[0]

    for (let x = 1; x < len; x++) {
        if (array[x] < min_value) {
            min_value = array[x]
        }
    }

    return min_value
}

function max_array(array) {
    let len = array.length
    let max_value = array[0]

    for (let x = 1; x < len; x++) {
        if (array[x] > max_value) {
            max_value = array[x]
        }
    }
        
    return max_value
}

console.log(min_array([1, 4, 2, 6, 10, 3]))
console.log(min_array([1, 4, -1, 6, 10, 3]))
console.log(max_array([1, 4, 2, 6, 10, 3]))