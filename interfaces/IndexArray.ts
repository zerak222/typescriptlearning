console.log("Index Arrays");

interface StudentName{
    [index:number]:string;
}

var studentNames:StudentName =["a","b","c"];

for(var i in studentNames){
    console.log(studentNames[i]);
}

interface StudentScore{
    [index:string]:number;
}

var studentScores : StudentScore ={};
studentScores["a"]=100;
studentScores["b"]=200;
studentScores["c"]=400;

for(var item in studentScores){
    console.log(item);
    console.log(studentScores[item]);
}