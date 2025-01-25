let str = 'Computer'

function scramble(value){
    let max = value.length
    let temp = ''
    for(let i=0; i<max; i++){
        console.log(value.length)
        let idx = Math.floor(Math.random()*value.length)
        temp += value[idx]
        console.log(temp)
        value = value.substr(0, idx) + value.substr(idx+1)
        console.log(value)
    }
    return temp
}
console.log(scramble(str))