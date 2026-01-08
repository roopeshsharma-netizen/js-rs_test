// function sayMyName(){
// console.log("R");
// console.log("O");
// console.log("O");
// console.log("P");
// console.log("E");
// console.log("S");
// console.log("H");
// }
//sayMyName 

function addTwoNumbers(number1,number2){
//console.log(number1+number2);// no need to pass console here
// let result=number1+number2
// return result
return number1+number2
}
const result= addTwoNumbers(3,4)
// console.log("Result: ", result)

function loginUserMessage(username){
    // if(username===undefined){
    if(!username){
        console.log("Please enter a username");
    return
    }
return `${username} just logged in`
}
//  console.log(loginUserMessage("Roopesh"))
console.log(loginUserMessage())
