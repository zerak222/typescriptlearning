var studentScores = new Map([["John", 90], ["Bob", 80], ["Richard", 60]]);
console.log(studentScores.size);
console.log(studentScores.get("John"));
studentScores.set("Mary", 50);
console.log(studentScores.size);
studentScores["delete"]("Mary");
console.log(studentScores.has("Mary"));
//studentScores.clear();
console.log(studentScores.keys());
for (var _i = 0, _a = Array.from(studentScores.keys()); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
    console.log(studentScores.get(key));
}
// for values
console.log(studentScores.values());
// for entries
console.log(studentScores.entries());
// tsc -lib "ES2016","DOM" MapType.ts
