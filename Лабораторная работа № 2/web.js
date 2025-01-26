function basicOperation(operation, value1, value2) {
    if(operation == '+'){
        console.log(value1 + value2);
    }
    else if(operation == '-'){
        console.log(value1 + value2);
    }
    else if(operation == '*'){
        console.log(value1 * value2);
    }
    else if(operation == '/'){
        console.log(value1 / value2);
    }
    
}

function call_func(){
    let result1 = basicOperation('+', 5, 10); 
    let result2 = basicOperation('-', 5, 10); 
    let result3 = basicOperation('*', 5, 10); 
    let result4 = basicOperation('/', 5, 10); 

}

function fun2(){
    let n = prompt("Введите n", 3);
    let sum = 0;
for(let i = 0; i <=n; i++){
sum += (i*i*i);
}
console.log(sum);
}


function fun3(array = [1,2,3,4,5,6,7,8,10]){
    let sum = 0
    for (let index = 0; index < array.length; index++) {
    sum += array[index];
        
    }
    console.log(sum/array.length);
}


function fun4(){
    let new_str = "";
    let array = [];
    let str1 = "JavaScr53э";
    for (let i = str1.length; i >= 0; i--) {
        if(str1.charCodeAt(i) >= 65 && str1.charCodeAt(i) <= 122){
            //console.log(str1[i]);
            array.push(str1[i])

        }
    }
    console.log(array);
    }
    
    function fun5(n = 5, str = "11111"){
     for (let index = 0; index < n; index++) {
        console.log(str);
     }
    }

    function fun6(arr1 = ["один", "два", "три"], arr2 = ["ноль", "два", "три"]){
       flag = true;
     for( let i = 0; i < arr1.length - 1; i++){

     for (let j = 0; j < arr2.length - 1; j++) {
     if(arr1[i] == arr2[j]){
        flag = false;
     }
     
     }
     if(flag){console.log(arr1[i]);}
     flag = true; 

     }
    }
    


    let fun7 = function (array = [1,2,3,4,5,6]){
        let sum = 0;
        for (let I = 0; I < array.length; I++) {
        sum += array[I];
        }
        console.log(sum);
        return sum;

    }

    let fun8 = (n = 1) =>{
    (n < 10 && console.log("окей"));
}