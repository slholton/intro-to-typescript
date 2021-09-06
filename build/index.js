"use strict";
// count is a "type" number
let count = 5;
count = 10;
// count = "Shavonne"
// Const's type is a literal
const fname = "Shavonne";
// this makes a var of type any
// let testing;
let testing;
// testing = "Shavonne"
testing = 5;
let student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
};
let student2 = {
    fname: "Bob",
    lname: "Procter",
    grade: 12
};
let sqr = (x) => x * x;
function toString(student) {
    return JSON.stringify(student);
}
const toStringArrow = (student) => {
    return JSON.stringify(student);
};
console.log(toString(student));
console.log(add(5, testing));
function add(x, y) {
    let result = x + y;
    return result;
}
// Tuple
function sendMessage() {
    let tmp = Math.round((Math.random()));
    if (tmp == 1) {
        return ["success", {
                fname: "Shavonne",
                lname: "H",
                grade: 12
            }];
    }
    else {
        return ["failure", "Something failed"];
    }
}
for (let i = 0; i < 10; i++) {
    let [statusResult, data] = sendMessage();
    if (statusResult == "success")
        console.log(data);
}
