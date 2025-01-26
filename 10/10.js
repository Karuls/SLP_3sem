function f1(){
    const set = new Set([1,1,2,3,4]);

console.log(set); 

const name = "Lydia";
age = 21;

console.log(delete name); // -
console.log(delete age);

const numbers=[1,2,3,4,5];
const[y]=numbers; // 1 эл

console.log(y); 

const user ={name: "Lydia", age: 21};
const admin = {admin: true, ...user}; // + 2cv

console.log(admin); 

//5
const person = {name: "Lydia"};

Object.defineProperty(person, "age", {value: 21});// enumerable: false

console.log(person);// невидимо
console.log(Object.keys(person));

//6
const a ={};
const b ={key:"b"}; // в сторку, ксли как ключ
const c ={key:"c"};

a[b]=123;//\
        //  |-- одно св 
a[c]=456;///



console.log(a[b]); //456
// 7
let num=10;

const increaseNumber = () => num++;  
const increasePassedNumber = number => Number++; // глоб не изм

const num1= increaseNumber();
const num2= increasePassedNumber(num1);

console.log(num1);// 10
console.log(num2); // Un

const value= {number:10};
const multiply=(x={...value}) =>{
    console.log(x.number*=2);
} ;

multiply();
multiply(); 
multiply(value); 
multiply(value); //40

[1,2,3,4].reduce((x,y) =>console.log(x,y));
}