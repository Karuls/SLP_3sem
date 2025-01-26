function task1(){
    let key;
    let products = new Set; 
    do {
        key = prompt(" 1 - добавить \n 2 - удалить \n 3 - наличие \n 4 - размер \n 0 - выход");
        switch(key){
            case '1': products.add(prompt("Введите добавляемый продукт")); break;
            case '2': products.delete(prompt("Введите удаляемый продукт"));break;
            case '3': console.log(products.has(prompt("Введите нужный продукт")));break;
            case '4': alert(products.size);break;
            
          
        }
    } while (key != 0);
}

function task2(){

    let key;
    let students = new Set; 
    let st = {
    group: 1,
    fio: "22",
    number_of_list: 1,
    };
    do {
        key = prompt(" 1 - добавить \n 2 - удалить \n 3 - фильтр(по группе) \n 4 - фильтр(п зачетке) \n 0 - выход");
        switch(key){
            case '1': 
            st = {
                group: prompt("Введите номер группы:"),
                fio: prompt("Введите фио:"),
                number_of_list: prompt("Введите номер зачетки: "),
                };
            students.add(st); 
            break;

            case '2': 
            let numToDelete = prompt("Введите номер удаляемой группы: ");
            let found = false;
            
            for (let student of students) {
                if (student.group === numToDelete) {
                    students.delete(student); 
                    found = true;
                    alert("Студент удалён");
                    break;
                }
            }
            
            if (!found) {
                alert("Студент с такой группой не найден");
            }
            break;

            case '3': 
            let studentArray = Array.from(students);

    
    for (let i = 0; i < studentArray.length - 1; i++) {
        for (let j = 0; j < studentArray.length - 1 - i; j++) {
            if (studentArray[j].group > studentArray[j + 1].group) {
                let temp = studentArray[j];
                studentArray[j] = studentArray[j + 1];
                studentArray[j + 1] = temp;
            }
        }
    }

    
    console.log("Отсортированные студенты по группе:", studentArray); break;

            case '4': 
            let studentArr = Array.from(students);
    
            for (let i = 0; i < м.length - 1; i++) {
                for (let j = 0; j < studentArr.length - 1 - i; j++) {
                    if (studentArr[j].number_of_list > studentArr[j + 1].number_of_list) {
                        let temp = studentArr[j];
                        studentArr[j] = studentArr[j + 1];
                        studentArr[j + 1] = temp;
                    }
                }
            }
           
        }
    } while (key != 0);
}

//----------------------------------------------------------------------------------------------->
function task3(){
    let count_of_products = 1;
    let key1;
    let tovars = new Map; 
    let product = {
    name: 1,
    count: 1,
    coast: 1,
    };
    do {
        key1 = prompt(" 1 - добавить \n 2 - удалить(по ID) \n 3 - удалить(по названию) \n 4 - изменить количество каждого товара \n 5 - изменить стоимость товара \n 0 - выход");
        switch(key1){
            case '1': 
            product = {
                name: prompt("Введите название товара:"),
                count: prompt("Введите количество:"),
                coast: prompt("Введите стоимость: "),
                };
                tovars.set(count_of_products, product);
                count_of_products++;
            break;

            case '2': 
            let numToDelete = Number(prompt("Введите ID удаляемого товара: "));
            let found = false;
            
            for (let prod of tovars.keys()) {
                if (prod === numToDelete) {
                    tovars.delete(prod); 
                    found = true;
                    alert("товар удалён");
                    break;
                }
            }
            
            if (!found) {
                alert("Товар с таким ID не найден");
            }
            break;

            case '3': 
            let nameToDelete = prompt("Введите название удаляемого товара: ");
            let found1 = false;
            
            for (let [k, product] of tovars) {
                    if (product.name == nameToDelete) {
                        tovars.delete(k);
                        found1 = true;
                        alert("Товар удалён");
                        break;
                    }
                
                
            }
            
            if (!found1) {
                alert("Товар с таким именем не найден");
            }
            break;


            case '4': 
            let new_count = prompt("Введите новое количество товаров: ");
    
            for (let [k, product] of tovars) {
                product.coast = new_count
                }
                break;

                case '5': 
                let new_k = prompt("Введите ключ желаемого товара");
                let new_coast = prompt("Введите новое количество товаров: ");
        
                for (let [k, product] of tovars) {
                    if(k == new_k){
                        product.coast = new_coast
                    }
                    
                    }
                    break;
        }
    } while (key1 != 0);
}

function task4(){

    let cache = new WeakMap();

    function process(obj) {
      if (!cache.has(obj)) {
        let result =  obj.count *4;
    
        cache.set(obj, result);
      }
      
      return cache.get(obj);
    }
    

    let obj = {count: 3};
    
    let result1 = process(obj);
    let result2 = process(obj);
    
    obj = null;
    
    // Нет возможности получить cache.size, так как это WeakMap,
    // но он равен 0 или скоро будет равен 0
    // Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются
    

}