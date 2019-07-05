function space() {
    "use strict";

    function createBicyclePrototype() {
        var speed = 0;

        function applyBrake(val) {
            speed = speed - val > 0 ? speed - val : 0;
            return speed;
        }

        function speedUp(val) {
            speed = speed += val;
            return speed;
        }

        return {
            applyBrake: applyBrake,
            speedUp: speedUp,
            value: function() { return speed; }
        };
    }

    var bike = {
        name: "Bike"
    };

    function createMountainBikePrototype(prototype) {
        prototype.gear = 1;
        prototype.setGear = function(val) {
            this.gear = val;
            return this.gear;
        };
        return Object.create(prototype);
    }

    function start() {
        var bicyclePrototype = createBicyclePrototype();
        var mountainBikePrototype = createMountainBikePrototype(bicyclePrototype);
        mountainBikePrototype.name = "Bicycle";
        return mountainBikePrototype;
    }

    console.log("Created by createBiCyclePrototype()");
    var by = createBicyclePrototype();
    console.log(by.speedUp(50));
    console.log(by.applyBrake(30));
    console.log(by.value());


    var mountainBike = createMountainBikePrototype(bike);
    var b1 = Object.create(createBicyclePrototype());
    var b2 = Object.create(createMountainBikePrototype(b1));


    mountainBike.setGear(50);
    b1.speedUp(40);
    b2.speedUp(33);
    b2.applyBrake(3);
    console.log("Created by createMountainBikePrototype(bike object)");
    console.log(mountainBike.name + " " + mountainBike.gear);

    console.log("2 object Created by createMountainBikePrototype(createBicyclePrototype) and createBicyclePrototype()");
    console.log("obj1: " + b1.value() + " " + "obj2: " + b2.value() + " shares the value"); // shares the value

    console.log("Created by start() function");
    var mBike = start();
    mBike.speedUp(29);
    console.log(mBike.name + " " + mBike.value());

    class CreateBicycleClass {
        constructor() {
            this.speed = 0;
            this.name = "Bicycle";
        }
        applyBrake(val) {
            this.speed = this.speed - val > 0 ? this.speed - val : 0;
            return this.speed;
        }
        speedUp(val) {
            this.speed = this.speed += val;
            return this.speed;
        }
        value() {
            return this.speed;
        }
    }

    class CreateMountainBikeClass extends CreateBicycleClass {
        constructor() {
            super();
            this.gear = 1;
            this.name = "MountainBike";
        }
        setGear(val) {
            this.gear = val;
            return this.gear;
        }
    }


    return {
        start: start,
        createBicyclePrototype: createBicyclePrototype,
        createMountainBikePrototype: createMountainBikePrototype,
        CreateBicycleClass: CreateBicycleClass,
        CreateMountainBikeClass: CreateMountainBikeClass
    };
}

var newObj = space();
console.log("< Created by Function >");
var newBike = newObj.start();
newBike.speedUp(37);
console.log(newBike.name + ": " + newBike.value());
console.log("< Created by Class >");
var newBikeC = new newObj.CreateBicycleClass();
newBikeC.speedUp(38);
console.log(newBikeC.name + ": " + newBikeC.value());
var newMountainBike = new newObj.CreateMountainBikeClass();
newMountainBike.speedUp(40);
newMountainBike.applyBrake(18);
newMountainBike.setGear(17);
console.log(newMountainBike.name + ": " + newMountainBike.value() + " " + newMountainBike.gear);