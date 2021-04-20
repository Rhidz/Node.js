const person = {
    name: "Rhidita",
    age: 26,
    greet() {
        console.log("Hi, I am Rhidita " + this.name);
    }
}

let printName = (personData) => {
    console.log(personData.name)
}
let rhidita = "whatever"
//printName(rhidita) // Why does this print Undefined?
//printName(person)

/* Destructuring Syntax for objects */ 
const print = ({ name }) => {
    console.log(name)
}
print(person)

 /* Destructuring Syntax for Arrays  */

 const hobbies = [ "a", "b", "c"];
 let [a, b] = hobbies
 console.log(a,b)
