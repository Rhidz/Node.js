const hobbies = ["Sports", "Music", "Fitness"]
hobbies.push("Weight Training") // Unlike swift, const values can be changed in js. 
console.log(hobbies)

let copiedArray = hobbies.slice()
console.log(copiedArray)

let anotherWayToCopyAnArray = [...hobbies] // Spread Opertor for copying an array
console.log(anotherWayToCopyAnArray)

const person = {
    name: "Rhidita",
    age: 26,
    greet() {
        console.log(this.name + " am awesome!!")
    }
}

const copyOfPerson = {...person} // Spread Operator pulls elements out of arrays and objects

const toArray = (...args) => {
    return args
}
console.log(copyOfPerson)
console.log(toArray(1,2,3,4,5,"Rhidita"))