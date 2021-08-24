// type this allows use to add to the type system
type Year = string | number

enum Color {
    "Red", // 0
    "Blue", // 1
    "Yellow" // 2
}

console.log(Color.Yellow)

type Car = {
    year: Year
    color: Color
}

type addInput = number | string
function addTwoThings(x: any, y: any): string | number 
{
    return x + y
} 

let z = addTwoThings("2", "5")
// Guard .. Type Guards
if (typeof z == "string"){
    z.toUpperCase()
}
// [1, 2, 3, "Hello"] // Array<number> or number[]
let myObj: number[] | object
myObj = [1, 2, 3]
myObj = { fname: "Shavonne"}
if (myObj instanceof Array) {
    console.log(myObj)
} else {
    let values = Object.values(myObj)
    console.log(values)
}

//myObj.map()
// interface 