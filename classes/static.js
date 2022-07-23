console.log("*********************static*********************");
var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        console.log(Check.bankName);
    };
    Check.bankName = "Bank of America";
    return Check;
}());
var check1 = new Check();
check1.display();
Check.bankName = "BOA";
check1.display();
