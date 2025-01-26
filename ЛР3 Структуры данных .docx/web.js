function fun1(arr = [1, [1, 2, [3,4]], [2,4]]) {
    let flattenedArr = arr.flat(2); 
    let result = flattenedArr.reduce((result, count) => { result.push(count); return result; }, []); 
    alert(result); // Выведет массив [1, 1, 2, 3, 4, 2, 4]
}


//
function fun2(arr = [1, [1, 2, [3,4]], [2,4]] ){
    let sum = 0;
    for(let count of arr){
    if(typeof(count) == 'object'){
    sum +=(fun2(count));
    }
   else{ 
    sum += count;
   }
}
return sum;
}
console.log(fun2());

let student1 = {
     name: "Ivan",
     age: 17,
     groupId: 2
    };
    let student2 = {
        name: "Vadim",
        age: 44,
        groupId: 5
       };
       let student3 = {
        name: "Islam",
        age: 22,
        groupId: 9
       };
       let mass = [student1,student2,student3];

function fun3(mass = [student1,student2,student3]){
    let return_object = {
        groupId: return_mass = [],
    };
    for(let elem of mass){
        if(elem.age >= 18){
            return_mass.push(elem); 
        }
    }
  
    console.table(return_mass);
    return return_object;
}



function fun4(str = 'ABC') {
    let total1 = '';
    let total2 = [];

    for (let elem of str) {
        total1 += elem.charCodeAt(0); 
    }
    
    console.log(total1);

    for (let i = 0; i < total1.length; i++) {
        total2.push(total1[i]);
        if (total1[i] == '7') {
            total2[i] = '1';
        }
    }

    console.log(total2.join(''));

    let numTotal1 = Number(total1);
    let numTotal2 = Number(total2.join(''));

    console.log(numTotal1 - numTotal2);
}

//
let scr1 = {
name: "Vadim",
};
let scr2 = {
    age: 18,
    };
    let scr3 = {
        course: 2,
        };
//
function fun5(src1, src2, src3){
    let new_object = {
        key: 1,
    };
    Object.assign(new_object, src1, src2, src3);
    console.table(new_object);
}
fun5(scr1, scr2, scr3); 
//

function fun6(n){
    for (let i = 0; i < n; i++) {
        const stars = '*'.repeat(2 * i + 1);
        const spaces = ' '.repeat(n - i - 1);
        console.log(spaces + stars);
    }

}
fun6(6);

function f7(){
    let key = {
        age : 18,
        name : "ivan",
        www : 1111
    
    };
    for(let i in key){
        alert(key[i]);
    }
}
