console.log("*********************static*********************")
class Check{
    static bankName:string ="Bank of America";
    customerName:string;
    accNo:string;
    routingNo:string;

    display(){
        console.log(Check.bankName);
    }
}

var check1 = new Check();
check1.display();
Check.bankName ="BOA";
check1.display();