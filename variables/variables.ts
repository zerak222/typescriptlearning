// number variable
var n1:number = 10;
console.log(n1);
// string variable
var s1:string = "First string variable";
console.log(s1);
// boolean variable
var b1:boolean = true;
var b2:boolean = false;
console.log(b1);
console.log(b2);
// anytype variable
var a1:any = "Anytype first";
console.log(a1);

a1 = 1;
console.log("Anytype after changing to number: "+a1);
// any JSON variable
var a2:any = {
   employeeID  : 1,
   employeeName: "Rakesh",
   employeePresent: true
};
console.log(a2);
// array variable
var array1:Array<string> = ["comp1","comp2","comp2"];
console.log(array1);
console.log("first element : "+array1[0]);
// array with any variable
var array2:Array<any> = ["comp1",1, true];
console.log(array2);