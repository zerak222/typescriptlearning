var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("*********************Inheritance*************************");
var BMW = /** @class */ (function () {
    function BMW(aMake, aModel, aYear) {
        this.make = aMake;
        this.model = aModel;
        this.year = aYear;
    }
    BMW.prototype.commonEngineFunctionality = function () {
        console.log("Common Engine Functionality");
    };
    BMW.prototype.start = function () {
        console.log("start");
    };
    BMW.prototype.stop = function () {
        console.log("stop");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(aCruiseControlEnabled, aMake, aModel, aYear) {
        var _this = _super.call(this, aMake, aModel, aYear) || this;
        _this.cruiseControlEnabled = aCruiseControlEnabled;
        return _this;
    }
    ThreeSeries.prototype.enableCruiseControl = function () {
        this.cruiseControlEnabled = true;
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(aParkingAssistEnabled, aMake, aModel, aYear) {
        var _this = _super.call(this, aMake, aModel, aYear) || this;
        _this.parkingAssistEnabled = aParkingAssistEnabled;
        return _this;
    }
    FiveSeries.prototype.commonEngineFunctionality = function () {
        console.log("Common Engine Functionality overridden");
    };
    FiveSeries.prototype.enableParkingAssist = function () {
        this.parkingAssistEnabled = true;
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries(true, "BMW", "328i", "2018");
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.start();
threeSeries.commonEngineFunctionality();
threeSeries.enableCruiseControl();
console.log(threeSeries.cruiseControlEnabled);
threeSeries.stop();
var fiveSeries = new FiveSeries(false, "BMW", "535", "2018");
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.start();
fiveSeries.commonEngineFunctionality();
fiveSeries.enableParkingAssist();
console.log(fiveSeries.parkingAssistEnabled);
fiveSeries.stop();
