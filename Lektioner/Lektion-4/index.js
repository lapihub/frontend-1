console.log('Hello class!')

let letVariableName = "Hej"
const constVariableName = 5.14 
const boolValue = true/false
const nullValue = null
const undefinedValue = undefined
const objectValue = { 
    id: 1, 
    firstName: "Lara", 
    lastName: "Pirdaoud", 
    age: 25 
}

const arrayValue = [1, 2, 3, 4]

const mapVariable = new Map

mapVariable.set("god mode", 1177)
console.log(mapVariable.get("god mode"))

const arr = [1, 1, 6, 23, 19, 120]
const setVariable = new Set
setVariable.add(1)
setVariable.add(1)
setVariable.add(6)
setVariable.add(23)
setVariable.add(19)
setVariable.add(120)
console.log(setVariable)

const button = document.querySelector(".btn")

function thisIsMyFunction() {

}
button.addEventListener("click", function() {
    alert("du klickade på knappen!")
})