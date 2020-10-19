let tab = [1,5,3,8,47,4,3]

function bubble(array){
    let a = array.length
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            if (array[j] > array[j+1]) {
                let b = array[j]
                array[j] = array[j+1]
                array[j+1] = b
            }
        } 
    }
    return array  
}
console.log(bubble(tab))