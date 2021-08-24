"use strict";
// count is a "type" number
var count = 5;
count = 10;
// count = "Shavonne"
// Const's type is a literal
var fname = "Shavonne";
// this makes a var of type any
// let testing;
var testing;
// testing = "Shavonne"
testing = 5;
var student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
};
function toString(student) {
    return JSON.stringify(student);
}
var toStringArrow = function (student) {
    return JSON.stringify(student);
};
console.log(toString(student));
console.log(add(5, testing));
function add(x, y) {
    var result = x + y;
    return result;
}
// Tuple
function sendMessage() {
    var tmp = Math.round((Math.random()));
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
for (var i = 0; i < 10; i++) {
    var _a = sendMessage(), statusResult = _a[0], data = _a[1];
    console.log(statusResult);
}
