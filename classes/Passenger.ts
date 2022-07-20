class PassengerClass {
    firstName:String;
    lastName : String;
    frequentFlierNumber : number ;
    constructor(aFirstName:string,aLastName:string,aFFNumber:number){
        this.firstName = aFirstName;
        this.lastName = aLastName;
        this.frequentFlierNumber = aFFNumber;
    }
    display(){
        console.log(this.firstName+" : "+this.lastName+" : "+this.frequentFlierNumber);
    }
}

var passenger1 = new PassengerClass("A","B",1234);
passenger1.display();

for(var item in passenger1){
    if(item!=="display"){
      console.log(item);
      console.log(passenger1[item]);
    }
}
