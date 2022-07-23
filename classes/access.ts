console.log("*********************access specifiers*********************");
class Student{
    public name:string;
    public readonly rname:string = "ReadOnlyName";
    private _section:number;

    display(){
        console.log("private member :",this._section);
    }
    get section():number{
        return this._section;
    }
    set section(aSection:number){
        this._section = aSection;
    }
}
var s1 = new Student();
s1.name = "name1";
s1.section = 1;
s1.display();

// tsc --target es5 access.ts to specify the targeted browser supports ECMA 5 version of javascript



