console.log("*********************access specifiers*********************");
var Student = /** @class */ (function () {
    function Student() {
        this.rname = "ReadOnlyName";
    }
    Student.prototype.display = function () {
        console.log("private member :", this._section);
    };
    Object.defineProperty(Student.prototype, "section", {
        get: function () {
            return this._section;
        },
        set: function (aSection) {
            this._section = aSection;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var s1 = new Student();
s1.name = "name1";
s1.section = 1;
s1.display();
// tsc --target es5 access.ts to specify the targeted browser supports ECMA 5 version of javascript
