function Vehicles(name, color, seats){
    this.name = name;
    this.color = color;
    this.seats = seats;
}

Vehicles.prototype.getDetailsV = function(){
    console.log(`${this.name} is only come with ${this.color} color variant with ${this.seats} seaters.`)
}

// const car = new Vehicles("Mahindra", "black", 6);
// car.getDetails();

function Bikes(name, color, fuel){
    // this.name = name;
    // this.color = color;

    Vehicles.call(this, name, color, 9);
    this.fuel = fuel;
}

Bikes.prototype = Object.create(Vehicles.prototype)

Bikes.prototype.getDetailsB = function(){
    console.log(`
    ${this.name} is only come with ${this.color} color variant with ${this.fuel} type fuel.
    `)
}

const bike = new Bikes("Pulsar", "blue", "Petrol");
bike.getDetailsB();

console.log(bike.__proto__)