function space() {
    "use strict";

    function createBicyclePrototye() {
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

    function createMountainBikeProtoype(prototype) {
        prototype.gear = 1;
        prototype.setGear = function(val) {
            this.gear = val;
            return this.gear;
        };
        return Object.create(prototype);
    }

    function start() {
        var bicyclePrototype = createBicyclePrototye();
        var mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
        mountainBikePrototype.name = "Bicycle";
        return mountainBikePrototype;
    }

    var by = createBicyclePrototye();
    console.log(by.speedUp(50));
    console.log(by.applyBrake(30));
    console.log(by.value());
    var mountainBike = createMountainBikeProtoype(bike);
    var b1 = Object.create(createBicyclePrototye());
    var b2 = Object.create(createMountainBikeProtoype(b1));

    mountainBike.setGear(50);
    b1.speedUp(40);
    b2.speedUp(33);
    b2.applyBrake(3);
    console.log(mountainBike.name + " " + mountainBike.gear);
    console.log(b1.value() + " " + b2.value()); // shares the value
    var mBike = start();
    mBike.speedUp(29);
    console.log(mBike.name + " " + mBike.value());

    return {
        start: start,
        createBicyclePrototye: createBicyclePrototye,
        createMountainBikeProtoype: createMountainBikeProtoype
    };
}

var newObj = space();
var newBike = newObj.start();
newBike.speedUp(37);
console.log(newBike.name + ": " + newBike.value());