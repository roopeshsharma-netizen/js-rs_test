// const user={
//     username:"roopesh",
//     price:1000,
//     welcomeMessage: function(){
//      console.log(`${this.username} ,welcome to website`);  
//     console.log(this);
//     }
// }
// user.welcomeMessage()
//  user.username="robert"
//  user.welcomeMessage()
// console.log(this);
// function coffee(){
//     let username="hitesh"
//     console.log(this.username); 
// }
// coffee()
// const coffee=function(){
//  let username="roopesh"   
//  console.log(this.username);
// }

// const coffee=()=>{
//  let username="roopesh"   
//  console.log(this.username);
// //  console.log(this);
// }
// coffee()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//implicit return:assume no need to write return statment die to single line

//const addTwo=(num1,num2) => num1 + num2
// const addTwo=(num1,num2) => (num1 + num2)
// const addTwo=(num1,num2) => ({username: "roopesh"})
// console.log(addTwo(3,4));

// const myArray=[2,5,3,7,8]
// myArray.forEach()

//IIFE
// (function coffee(){//named IIFE
//     console.log('DB connected');
// })()
//coffee() //()due to global scope polution to remove global scope polution we used IFFE

(()=>{
    console.log('DB connected two');
    
})();

//*****************JAVASCRIPT Execution Context
// let val1=10
// let val2=5
// function addNum=(num1,num2){
//     let tital=num1+num2
//     return total
// }
// let result1=addNum(val1,val2)
// let result2=addNum(10,2)

// step->1.Global Execution(allocate under this)
//       2.memory phase
//       val1->undefined
//       val2->undefined
//       addNum->definition
//       result1->undefined
//       result2->undefined
//      3.Execution phase
//      val1->10
//      val2->5
//      addNum->kuch bhi nahi kyoni isme kuch bhi nahi hoga
//      result1->addNum[new variable Env. +execution thread] will be delete
//      result1 will store ->15
//      memory phase      execution context
//      val1->undefined   num1->10
//      val2->undefined   num2->5
//      return on global exe context

//      -------------------
//      NVe+thread exe
//      memory phase   execution phase
//      repeat previous cycle

//**call stack

