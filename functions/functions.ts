console.log("functions");
function hello(name : string):string{
    return "hello " +name;
}

console.log(hello("Rakesh"));
// funciton with multiple arguments
function add(num1:number , num2:number):number{
    return num1+num2;
}
console.log("Sum is "+add(1,2));
// optional params
function display(id:number, name:string , role?:string){
    console.log("Id",id);
    console.log("Name",name);
    if(role!=undefined){
        console.log("Role",role)
    }
}
display(1,"Rakesh");
display(2,"Rajesh","Admin");
// default value
function display2(id:number, name:string , role:string="Developer"){
    console.log("Id",id);
    console.log("Name",name);
    console.log("Role",role);
}
display2(1,"Rakesh");
display2(2,"Rajesh","Admin");
// function as arguments
function calculate(fun:any):void {
    console.log(fun(10,20));
}
calculate(add);