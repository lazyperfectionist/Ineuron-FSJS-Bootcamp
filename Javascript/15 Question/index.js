// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

const num = -1
let grade;
if(num>=0 && num<=49){
    grade = 'F'
    console.log(`Your marks is ${num} and grade is ${grade}`);
}
else if(num>=50 && num<=59){
    grade = 'D'
    console.log(`Your marks is ${num} and grade is ${grade}`);
}
else if(num>=60 && num<=69){
    grade = 'C'
    console.log(`Your marks is ${num} and grade is ${grade}`);
}
else if(num>=70 && num<=79){
    grade = 'B'
    console.log(`Your marks is ${num} and grade is ${grade}`);
}
else if(num>=80 && num<=100){
    grade = 'A'
    console.log(`Your marks is ${num} and grade is ${grade}`);
}
else{
    console.log("Invalid number! Please enter a number between 0 to 100");
}
