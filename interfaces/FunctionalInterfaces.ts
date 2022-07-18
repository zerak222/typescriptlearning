console.log("FunctionalInterfaces")
interface Add {
    (x:number,y:number):void;
}
interface Sub{
    (a:number,b:number):number;
}

var add:Add;
var sub:Sub;

add = function(a:number,b:number):number{
    return a+b;
}
sub = function(a:number,b:number):number{
    return a-b;
}

console.log(add(1,2));
console.log(sub(3,2));