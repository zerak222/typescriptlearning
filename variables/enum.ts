enum Gender{
    Male,
    Female
};

console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[0]);
console.log(Gender[1]);

// modify default index

enum Weekends{
    Saturday = 6,
    Sunday = 7
};
console.log(Weekends.Saturday);
console.log(Weekends.Sunday);