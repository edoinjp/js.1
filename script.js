let user = {
    firstname:"giorgi",
    lastname:"smith",
    age:"25",
    status:"active",

};
console.log(user.status);


let num = [2, 6, 40, 45, 31, 72, 444, 10, 20, 34, 29]

for (let i = 0; i < num.length; i++ ){
    if(num[i] > 5 )
    console.log(num[i]);
}

//  

let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
    
];
if(users.status = true){
    
    console.log(users.username);

}
else(user.status = false) ; { 
    console.log()
};

// 
let user = {
	name: 'giorgi',
	age:  20,
	studentstatus: "active"
}
 if(user.age > 18 && user.studentstatus == "active" ){
    console.log()
 }

//  
 else if(user.name == 'giorgi'){
     console.log("hello girogi")

 }
 else{
     console.log("error")

 }
 if(user.studentstatus == 'active' || user.age < 25 ){
     console.log("hello world")

 }
 else{
     console.log('error')
 }

// 
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;

for(let i = 0 ; i < array.length; i++){
    if (typeof array[i] == "string" ){
        console.log(array[i]);
    }
}
