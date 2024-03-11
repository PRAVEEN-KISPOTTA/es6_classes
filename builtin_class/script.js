const date = new Date();
console.log(date);

//type 2
const dob = new Date("1999-07-17");
console.log(dob);


//type 3
const currentDate = new Date(2024, 3, 15);
console.log(currentDate);

console.log(date.toJSON())


//regexp expression
const regex = /Praveen kispotta/i
const text = "Hello my name is Praveen Kispotta";

const isMatch = regex.test(text);
console.log(isMatch);

const details = regex.exec(text);
console.log(details)