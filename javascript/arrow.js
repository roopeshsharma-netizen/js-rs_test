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

