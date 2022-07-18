console.log("Index Arrays");
var studentNames = ["a", "b", "c"];
for (var i in studentNames) {
    console.log(studentNames[i]);
}
var studentScores = {};
studentScores["a"] = 100;
studentScores["b"] = 200;
studentScores["c"] = 400;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
