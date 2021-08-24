
// count is a "type" number
let count = 5
count = 10
// count = "Shavonne"

// Const's type is a literal
const fname = "Shavonne"

// this makes a var of type any
// let testing;
let testing: number; 

// testing = "Shavonne"
testing = 5

type Student = {
    fname: string
    lname: string
    grade: number
}

let student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
}

function toString(student: Student): string {
    return JSON.stringify(student)
}

const toStringArrow = (student: Student): string => {
    return JSON.stringify(student)
}

console.log(toString(student))
console.log(add(5, testing))

function add(x: number, y: number): number {
    let result = x + y
    return result
}

// const [statusResult, data] = sendMessage()
// if (statusResult == "success")
//     console.log(data.fname)

// Any & Void

// Union
type Status = "success" | "failure"
type ServerResponse = Student | Error
// Tuple
function sendMessage(): [status: Status, response: ServerResponse] 
{
    let tmp = Math.round((Math.random()));

    if(tmp == 1) {
        return ["success", {
            fname: "Shavonne",
            lname: "H",
            grade: 12
        }]
    // } else {
        // return ["failure", "Something failed"]
    // }
}

for(let i=0; i<10; i++){
    let [statusResult, data] = sendMessage()
    console.log(statusResult)
}

