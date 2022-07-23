let courses = new Set();
courses.add("Angular");
courses.add("React");
courses.add("Node");
courses.add("Serverless");

console.log(courses.size);
console.log(courses.values());
courses.add("React"); // duplicates are overwritten

courses.forEach(function(course){
    console.log(course);
});

