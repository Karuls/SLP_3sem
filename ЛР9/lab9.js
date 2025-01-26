
function f1(){

const Figure = {
    type: null,
    color: null,
    size: null,
    describe() {
      return `Фигура: ${this.type}, Цвет: ${this.color}, Размер: ${this.size}`;
    },
  };
  
  
  const Square = Object.create(Figure);
  Square.type = "квадрат";
  Square.color = "жёлтый";
  Square.size = "большой";
  
  
  const SmallSquare = Object.create(Square);
  SmallSquare.size = "маленький";
  
  
  const Circle = Object.create(Figure);
  Circle.type = "круг";
  Circle.size = "большой";
  Circle.color = "белый";
  
  
  const GreenCircle = Object.create(Circle);
  GreenCircle.color = "зелёный";
  
  
  const Triangle = Object.create(Figure);
  Triangle.type = "треугольник";
  Triangle.size = "большой";
  Triangle.lines = 3;
  
  
  const TriangleWithLines = Object.create(Triangle);
  TriangleWithLines.lines = 3;
  
  
  console.log(GreenCircle.describe()); // Фигура: круг, Цвет: зелёный, Размер: большой
  console.log(TriangleWithLines.lines); // 3
  console.log(SmallSquare.hasOwnProperty("color")); // false
  console.log(SmallSquare.color); // жёлтый унаследовано от Square

}
  //---------

 function f2(){
class Human {
    constructor(name, surname, birthYear, address) {
      this.name = name;
      this.surname = surname;
      this.birthYear = birthYear;
      this.address = address;
    }
  
    
    get age() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    // пересчитывет год рождения
    set age(newAge) {
      const currentYear = new Date().getFullYear();
      this.birthYear = currentYear - newAge;
    }
  
    
    updateAddress(newAddress) {
      this.address = newAddress;
    }
  }
  
  class Student extends Human {
    constructor(name, surname, birthYear, address, faculty, course, group, recordBookNumber) {
      super(name, surname, birthYear, address);
      this.faculty = faculty;
      this.course = course;
      this.group = group;
      this.recordBookNumber = recordBookNumber;
    }
  
    
    updateCourse(newCourse) {
      this.course = newCourse;
    }
  
   
    updateGroup(newGroup) {
      this.group = newGroup;
    }
  
   
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
  
    //  Парсинг номера зачетной книжки
    parseRecordBook() {
      const facultyCode = this.recordBookNumber[0];
      const specialtyCode = this.recordBookNumber[1];
      const yearOfAdmission = `20${this.recordBookNumber.slice(2, 4)}`;
      const budgetOrPaid = this.recordBookNumber[4] === "1" ? "бюджет" : "платное";
      const serialNumber = this.recordBookNumber.slice(5);
  
      return {
        facultyCode,
        specialtyCode,
        yearOfAdmission,
        budgetOrPaid,
        serialNumber,
      };
    }
  }
  
 
  class Faculty {
    constructor(name, groupsCount, studentsCount) {
      this.name = name;
      this.groupsCount = groupsCount;
      this.studentsCount = studentsCount;
      this.students = []; // Список студентов
    }
  
   
    updateGroupsCount(newCount) {
      this.groupsCount = newCount;
    }
  
   
    updateStudentsCount(newCount) {
      this.studentsCount = newCount;
    }
  
   
    addStudent(student) {
      this.students.push(student);
      this.studentsCount++;
    }
  
    // получения к. студентов ДЭВИ
    getDev() {
      return this.students.filter(student => student.parseRecordBook().specialtyCode === "3").length;
    }
  
    
    getGroup(groupName) {
      return this.students.filter(student => student.group === groupName);
    }
  }
  
  
  
  
  const human = new Human("Иван", "Иванов", 1995, "г. Минск, ул. Ленина, д. 10");
  console.log(human.age); 
  human.age = 30;
  console.log(human.birthYear);
  
  
  const student = new Student(
    "Алексей",
    "Петров",
    2000,
    "г. Гродно, ул. Советская, д. 20",
    "ФИТ",
    2,
    "ПОИТ-2",
    "71201301"
  );
  console.log(student.getFullName()); // Алексей Петров
  console.log(student.parseRecordBook()); // Разбор номера зачетной книжки
  
  
  const fitFaculty = new Faculty("ФИТ", 10, 100);
  fitFaculty.addStudent(student);
  console.log(fitFaculty.getDev()); // студентs ДЭВИ
  console.log(fitFaculty.getGroup("ПОИТ-2"));
  



}