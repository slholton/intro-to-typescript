/*
What is JSON
Object
Array
Number
String
    "Literal Values"
false
true
null
*/
// Modify the 3 type JSON* values to parse json and fail otherwise
// Use the isJson function to test


function isJSON(j: JSONValue){}
type Primative = string | number | boolean | null

type JSONObject = any
type JSONArray = any
type JSONValue = any

let testing1: JSONValue = { fname: "Shavonne", data: [1, 2, 3]}
let testing2: JSONValue = "Test string"
let testing3: JSONValue = [1, 2, "Hello", { fname: "Shavonne"}] 

isJSON(testing1)
isJSON(testing2)
isJSON(testing3)

let test2: JSONValue = { fname: "Shavonne", data: [1, 2, 3]}
let test3: JSONValue = { fname: "Shavonne", data: [1, 2, 3]}

// @ts-expect-error
// isJSON(class Test{})

// @ts-expect-error
// isJSON(isJSON)