let person = {
    firstname: "Steffen",
    lastname: "Fabricius",
    age: "50",
    hometown: "Frederiksberg",
}

console.log(person.firstname)
console.log(person.age)
console.log(person["hometown"])
console.log(person["firstname"])

/*******Opgave 2*****/

let mig = {
    firstname: "Steffen",
    lastname: "Fabricius",
    age: "50",
    hometown: "Frederiksberg",
    married: false,
    hobbies: ["webdesign", "computerspil", "historie"],
    pet: {
        petname: "Bobby",
        Type: "snail"
    }
}
console.log(mig.hobbies);

mig.hobbies.forEach(function (hobby) {
    console.log(hobby)
})