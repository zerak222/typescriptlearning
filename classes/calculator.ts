console.log("*****************Calculator*****************");
class Calculator{
    static sum(num1:number,num2:number):number{
        return num1+num2;
    }
    static sub(num1:number,num2:number):number{
        return num1-num2;
    }
}


console.log("Sum of 1 and 2 is :", Calculator.sum(1,2));
console.log("Difference of 3 and 2 is :",Calculator.sub(3,2));