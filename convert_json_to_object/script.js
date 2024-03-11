const jsonStr = `{
    "name": "John",
    "age": 30,
    "city": "New York"
}`

const obj = JSON.parse(jsonStr);
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);



//shallow copy and deep copy
const obj2 = {
    name: "Praveen Kispotta",
    gotJob: "No",
    bloodGrp: "A+"
}

const obj3 = obj2;
console.log("obj3", obj3);
console.log("obj2", obj2);

obj3.gotJob = "Yes";
console.log("obj3", obj3);
console.log("obj2", obj2);// it will also effect the obj2 because obj3 is also pointing the same refrence as obj2 is pointing(it does not copy)


//shallow copy
const obj4 = {...obj2} //copying using spread operator

console.log("obj4", obj4);
console.log("obj2", obj2);

obj4.bloodGrp = "O+";
console.log("obj4", obj4);
console.log("obj2", obj2);

//shallow copying using assign property
const user2 = Object.assign({}, obj2);

console.log("user2", user2);
console.log("obj2", obj2);

user2.name = "Alen Kujur";
console.log("user2", user2);
console.log("obj2", obj2);