console.log("********arrays*************")
var courses:any = ["Angular","React","ES6","JMS"];
courses.push("Spring Security");
courses.push(10);

for(var i=0;i<courses.length;i++){
    console.log(courses[i]);
}
// Destructuring array

var [a,b,c]= courses;
console.log(a);
console.log(b);
console.log(c);