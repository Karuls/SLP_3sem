function f1(){
    let user = {
        name: "Вадим",
        age: 18,
        greet() {
          console.log(`Привет, ${this.name}!`);
        },
      
        ageAfterYears(){
        console.log(`текущий возраст ${this.age}`);
        }
      };
      
      user.greet();
      user.ageAfterYears();
      //-------------------------------------------->
      let car = {
        model: "x6",
        year: 2005,
        getInfo(){
          console.log(`Модель машины ${this.model}`);
          console.log(`Год машины ${this.year}`);
        }
      }     
      car.getInfo();
}

function f2(){
  function Book(Title, Author){
    this.Title = Title,
    this.Author = Author,
    this.getTitle = function() {
      console.log("Название книги: " + this.Title);
    };
    
    this.getAuthor = function() {
      console.log("Автор книги: " + this.Author);
    };
  }

    let book1 = new Book("1984","Oруэлд");
    console.log(`${book1.Author} - ${book1.Title}`);
    console.log(book1.getTitle());
    console.log(book1.getAuthor()); 
}

function f3(){

  const team = {
    players: [
      { name: 'Игрок 1', position: 'Нападающий' },
      { name: 'Игрок 2', position: 'Защитник' },
      { name: 'Игрок 3', position: 'Вратарь' },
    ],
    Info() {
      for (const player of this.players) {
        console.log(`Имя: ${player.name}, Позиция: ${player.position}`);
      }
    }
  };
  
  team.Info();
  

}

function f4(){
  const counter = (function() {
    let count = 0;
  
    return {
      increment() {
        count++;
        return this; 
      },
      decrement() {
        count--;
        return this;
      },
      getValue() {
        console.log(count);
        return this;
      }
    };
  })();
  
  console.log(counter.getValue()); 
counter.increment();
console.log(counter.getValue()); 
counter.decrement();
console.log(counter.getValue()); 
  counter.increment().increment().decrement().getValue(); 
  
}

function f4(){


  let item = {
    price: 100,
  };

 console.log(item.price);
 item.price = 999;
 console.log(item.price);
//
Object.defineProperty(item, "price", { writable: false, configurable: false});
item.price = 314;
console.log(item.price);
}



function f7() {
  let circle = {
    radius: 5,

    get Square() {
      return `${Math.pow(this.radius, 2) * 3.14}`;
    },

    get Radius() {
      return `Радиус = ${this.radius}`;
    },

    set userRadius(value) {
      this.radius = value;
    },
  };

  console.log(circle.Square); 
  console.log(circle.Radius); 

  circle.userRadius = 33; 
  console.log(circle.Radius); 
}

function f8(){
  
let car = {};

Object.defineProperties(car, {
  make: {
    value: "Toyota",
    writable: true,
    configurable: true,
    enumerable: true
  },
  model: {
    value: "Camry",
    writable: true,
    configurable: true,
    enumerable: true
  },
  year: {
    value: 2020,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(car); 


Object.defineProperties(car, {
  make: {
    writable: false,
    configurable: false
  },
  model: {
    writable: false,
    configurable: false
  },
  year: {
    writable: false,
    configurable: false
  }
});


car.make = "Honda";
car.year = 2021;
delete car.model;

console.log(car);

}

function f9(){
  let numbers = [1, 2, 3];

Object.defineProperty(numbers, "sum", {
  get() {
    return this.reduce((acc, num) => acc + num, 0);
  },
  enumerable: true,   
  configurable: false 
});

console.log(numbers.sum); 


numbers.sum = 100;
console.log(numbers.sum); 

}

function f10(){
  const rectangle = {
    _width: 0,
    _height: 0,
  
    
    get area() {
      return this._width * this._height;
    },
  
    
    get width() {
      return this._width;
    },
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.log("Ширина должна быть положительным числом");
      }
    },
  
    
    get height() {
      return this._height;
    },
    set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.log("Высота должна быть положительным числом");
      }
    }
  };
  
  
  rectangle.width = 5;
  rectangle.height = 10;
  
  
  console.log(rectangle.width);   
  console.log(rectangle.height);  
  console.log(rectangle.area);    
  
}

function f11(){
  const user = {
    _firstName: "Иван",
    _lastName: "Иванов",
  
    
    get fullName() {
      return `${this._firstName} ${this._lastName}`;
    },
  
    
    set fullName(value) {
      const parts = value.split(" ");
      if (parts.length === 2) {
        this._firstName = parts[0];
        this._lastName = parts[1];
      } else {
        console.log("Полное имя должно состоять из двух слов.");
      }
    },
  
    
    get firstName() {
      return this._firstName;
    },
    set firstName(value) {
      this._firstName = value;
    },
  
    get lastName() {
      return this._lastName;
    },
    set lastName(value) {
      this._lastName = value;
    }
  };
  
  
  console.log(user.fullName);
  
  user.fullName = "Петр Петров";
  console.log(user.fullName);
  
  user.fullName = "Сергей"; 
  
}