function fun1(){
    const volume = (length) => (width) => (height) => length * width * height;
console.log(volume(2)(3)(4)); 

const volume2 = volume(5);
console.log(volume2(1,4));
}

function fun2 (){
    
   
    const gen = movementGenerator();

    while (true) {
        const coords = gen.next().value
        if (coords) {
            console.log(`Текущие координаты: x = ${coords.x}, y = ${coords.y}`);
        }
    }
    
}
function* movementGenerator() {
    let x = 0; 
    let y = 0; 

    while (true) {
        const command = prompt("Введите команду (влево, вправо, вверх, вниз):").toLowerCase();

        if (command === 'влево') {
            for (let i = 0; i < 10; i++) {
                x -= 1; 
                yield { x, y };
            }
        } else if (command === 'вправо') {
            for (let i = 0; i < 10; i++) {
                x += 1; 
                yield { x, y }; 
            }
        } else if (command === 'вверх') {
            for (let i = 0; i < 10; i++) {
                y += 1; 
                
                yield { x, y }; 
            }
        } else if (command === 'вниз') {
            for (let i = 0; i < 10; i++) {
                y -= 1; 
                yield { x, y }; 
            }
        } else {
            alert("Некорректная команда. Пведите влево, вправо, вверх, вниз");
        }
    }
}


var globalVar1 = "гл переменная 1";
let globalVar2 = "гл переменная 2"; 
const globalVar3 = "гл переменная 3"; 

const fun = function globalFunction() {
    return "гл функция";
}

console.log(window.fun());
console.log(window.globalVar1); // "Я гл переменная 1"
console.log(window.globalFunction()); // "Я гл функция"


window.globalVar1 = "Новое значение для глобальной переменной 1";
console.log(window.globalVar1); 


 window.globalVar2 = "Невозможно изменить"; 
 window.globalVar3 = "Невозможно изменить"; 

console.log(globalVar2); // "Я глобальная переменная 2"
console.log(globalVar3); // "Я глобальная переменная 3"


function fun5(){

function makeCounter(){
    let curretCounter = 1;

return function(){
    return curretCounter++;
};
}
 let counter = makeCounter();

 alert(counter());
 alert(counter());
 alert(counter());

 let counter2 = makeCounter();
 alert(counter2());

}

function fun6(){
    let curretCounter = 1;

    function makeCounter(){
    return function(){
        return curretCounter++;
    };
    }

     let counter = makeCounter();
     let counter2 = makeCounter();

     alert(counter());
     alert(counter());

     alert(counter2());
     alert(counter2());
    
}
