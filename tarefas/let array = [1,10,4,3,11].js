let arra = [1,10,4,3,11,-1,-10]
function ord(array){
    for (let i=0; i<array.length;i++){
        for(let k = i+1; k < array.length; k++){
            if(array[i] > array[k]){
                let aux = array[i];
                array[i] = array[k];
                array[k] = aux
            }
        }
    }
    return array
}
console.log(ord(arra))