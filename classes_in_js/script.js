//Classes in js.............class expression
const Vehicles1 = class{

}


//Classes in js.............class declaration
class Vehicles{
    //Properties
    name;
    color;
    fuelType;

    //Constructor
    constructor(name, color, fuelType){
        this.name = name;
        this.color = color;
        this.fuelType = fuelType;
    }

    //Methods
    getDetails(){
        console.log(
            `I owned "${this.name}", cotted with premium "${this.color}" color and it is a "${this.fuelType}" type vehicle`
        )
    }
}

const veh = new Vehicles("Mahindra XUV 700", "Light Black", "Petrol");
console.log(veh);

veh.getDetails();