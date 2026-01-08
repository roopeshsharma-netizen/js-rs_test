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

// function addTwoNumbers(number1,number2){
//console.log(number1+number2);// no need to pass console here
// let result=number1+number2
// return result
// return number1+number2
// }
// const result= addTwoNumbers(3,4)
// console.log("Result: ", result)

// function loginUserMessage(username){
    // if(username===undefined){
    // if(!username){
        // console.log("Please enter a username");
    // return
    // }
// return `${username} just logged in`
// }
//  console.log(loginUserMessage("Roopesh"))
// console.log(loginUserMessage())

// ******************************************
//shopping Cart
function calculateCartPrice(val1,val2, ...num1){ //Rest or spread operator
return num1
}
// console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,400,500,2000));

const user={
    username:"roopesh",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and 
        price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
      username:"sam",
      price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000])); 