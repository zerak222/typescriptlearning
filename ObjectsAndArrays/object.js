console.log("********object********");
var student = {
    sname: "Student1",
    score: 50
};
console.log(student.sname);
console.log(student.score);
console.log("for in loop");
for (var key in student) {
    console.log(key + " : " + student[key]);
}
// Destructuring object
var sname = student.sname, score = student.score;
console.log(sname);
console.log(score);
