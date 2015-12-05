var car = {
    speedometer : 0
};

Object.defineProperties(car, {
    setSpeedometer: {
        value: function(speed) {
            this.speedometer = speed;
            return this;
        }
    },
    getSpeedometer: {
        value: function() {
            console.log(this.speedometer);
            return this;
        }
    },
    clearSpeedometer: {
        value: function() {
            this.speedometer = 0;
            return this;
        }
    }
});

car.setSpeedometer(200).setSpeedometer(300).clearSpeedometer().getSpeedometer();
