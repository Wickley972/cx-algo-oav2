let tab = [2,1,3,5,4,8,6,2]

function insertion(array){
    let a = array.length
    for (let i = 1; i < a ; i++){
        let b = array[i]
        j=i
        while (j>0 && array[j-1] >= b) {
            array[j] = array[j-1]
            j--
        }
        array[j] = b       
    }
    return array
}

console.log(insertion(tab))