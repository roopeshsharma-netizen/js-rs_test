const user={
    username:"roopesh",
    price:1000,
    welcomeMessage: function(){
     console.log(`${this.username} ,welcome to website`);  
    console.log(this);
    }
}
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

const coffee=()=>{
 let username="roopesh"   
 console.log(this.username);
//  console.log(this);
}
coffee()