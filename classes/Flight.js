var FlightClass = /** @class */ (function () {
    function FlightClass(aFlightNo, aFrom, aTo) {
        this.flightNo = aFlightNo;
        this.from = aFrom;
        this.to = aTo;
    }
    FlightClass.prototype.display = function () {
        console.log(this.flightNo + " " + this.from + " " + this.to);
    };
    return FlightClass;
}());
var flight = new FlightClass(1, "Hyderabad", "Delhi");
flight.display();
