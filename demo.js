// Basic Class
class Animal {
    // Class properties
    // Constructor Function
    constructor(name, legs){
        this.name = name
        this.legs = legs
    }
    // Methods
    speak(){
        console.log(this.name)
    }

}
   
// Class Inheritance
class Tiger extends Animal {
    #password = 42
    constructor(name, legs, isDanger){
        super(name, legs)
        this.isDanger = isDanger
    }
    // getters --define a property of an object, but they do not calculate the property's value until it is accessed
    get password(){
        return this.#password
    }
    // setters --executes a function whenever a specified property is attempted to be changed
    set password (n){
        if (typeof n === "number")
        this.#password = n
    }
}

// *can use getters and/or setters

let tiger = new Tiger("bengal", 4, true)
console.log(tiger)
tiger.password = "Hello"
console.log(tiger.password)

//Create an instance of a class
let dog = new Animal("lab", 4)
let cat = new Animal("ragdoll", 4)
cat.speak()

// console.log(dog, cat)
// console.log(dog.name, cat.legs)
// console.log(dog.name, cat.name)

let numbers = [2, 4, 6]
class Template {
    constructor(n){
        this.value = n
    }
}
let tNumbers = numbers.map(n => new Template(n))
console.log(tNumbers)