let tab = [2,1,3,5,4,8,6,2]
function selection(array){
    let a = array.length
    for (let i = 0; i < a-1; i++) {
        let min = i
        for (let j = i+1; j < a; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (min != i) {
            let b = array[i]
            array[i] = array[min]
            array[min] = b
        }
    }
    return array
}

console.log(selection(tab))