var PassengerClass = /** @class */ (function () {
    function PassengerClass(aFirstName, aLastName, aFFNumber) {
        this.firstName = aFirstName;
        this.lastName = aLastName;
        this.frequentFlierNumber = aFFNumber;
    }
    PassengerClass.prototype.display = function () {
        console.log(this.firstName + " : " + this.lastName + " : " + this.frequentFlierNumber);
    };
    return PassengerClass;
}());
var passenger1 = new PassengerClass("A", "B", 1234);
passenger1.display();
for (var item in passenger1) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger1[item]);
    }
}
