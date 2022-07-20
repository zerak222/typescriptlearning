console.log("*********************Inheritance*************************");
class BMW{
    make  : string;
    model : string;
    year  : string;

    constructor(aMake:string,aModel:string,aYear:string){
        this.make = aMake;
        this.model = aModel;
        this.year = aYear;
    }
    commonEngineFunctionality(){
        console.log("Common Engine Functionality");
    }

    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

class ThreeSeries extends BMW{
    cruiseControlEnabled : boolean;
    constructor(aCruiseControlEnabled:boolean,aMake:string,aModel:string ,aYear:string){
        super(aMake,aModel,aYear);
        this.cruiseControlEnabled = aCruiseControlEnabled;
    }
    enableCruiseControl(){
        this.cruiseControlEnabled = true;
    }
}

class FiveSeries extends BMW{
    parkingAssistEnabled : boolean;
    constructor(aParkingAssistEnabled:boolean,aMake:string,aModel:string ,aYear:string){
        super(aMake,aModel,aYear);
        this.parkingAssistEnabled = aParkingAssistEnabled;
    }
    commonEngineFunctionality(): void {
        console.log("Common Engine Functionality overridden");
    }
    enableParkingAssist(){
        this.parkingAssistEnabled = true;
    }
}

var threeSeries = new ThreeSeries(true,"BMW","328i","2018");
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.start();
threeSeries.commonEngineFunctionality();
threeSeries.enableCruiseControl();
console.log(threeSeries.cruiseControlEnabled);
threeSeries.stop();


var fiveSeries = new FiveSeries(false,"BMW","535","2018");
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.start();
fiveSeries.commonEngineFunctionality();
fiveSeries.enableParkingAssist();
console.log(fiveSeries.parkingAssistEnabled);
fiveSeries.stop();