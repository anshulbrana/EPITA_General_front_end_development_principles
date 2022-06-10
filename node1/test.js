console.log('Test')

let word = "Hello"

console.log(word + " World")

let tableArray = []

tableArray.push("This")
tableArray.push("is")
tableArray.push(100)
tableArray.push("EPITA")

console.log(tableArray)

for(let i = 0; i< tableArray.length; i++){
    console.log(tableArray[i])
}

tableArray.splice(1,2)

console.log(tableArray)

