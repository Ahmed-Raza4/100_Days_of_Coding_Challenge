/*Question 133: Write a JavaScript object and convert 
it into a JSON string.

Explain & TIP: JSON (JavaScript Object Notation) is a
lightweight data-interchange format. It's easy for
humans to read and write and for machines to parse 
and generate. Converting a JavaScript object into a 
JSON string can be done using JSON.stringify().*/

const person = {
    name: "Ahmed Raza",
    age: 27,
    city: "Karachi"
}

const jsonString = JSON.stringify(person);

console.log(jsonString);

