interface FlightInterface{
    flightNo : number;
    from : string;
    to : string;
    display(): void;
}

class FlightClass implements FlightInterface {
    flightNo: number;
    from: string;
    to: string;

    constructor(aFlightNo: number, aFrom: string, aTo: string) {
        this.flightNo = aFlightNo;
        this.from = aFrom;
        this.to = aTo;
    }

    display(): void {
        console.log(this.flightNo + " " + this.from + " " + this.to);
    }
}
var flight = new FlightClass(1,"Hyderabad","Delhi");
flight.display();



