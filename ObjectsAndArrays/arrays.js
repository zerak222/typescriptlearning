console.log("********arrays*************");
var courses = ["Angular", "React", "ES6", "JMS"];
courses.push("Spring Security");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
// Destructuring array
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
