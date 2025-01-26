class Task {
    constructor(id, name) {
        this.id = id; // У ид
        this.name = name; 
        this.state = false; //вып\невып
    }

    
    changeName(name) {
        this.name = name;
    }

    
    changeState() {
        this.state = !this.state;
    }
}

class Todolist {
    constructor() {
        this.tasks = []; 
        this.filter = 'all'; 
    }

    
    addTask(task) {
        this.tasks.push(task); // add
        this.renderTasks(); 
    }

    // Удал з по ид
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId); // Фильтруем задачи, исключая указанную
        this.renderTasks(); 
    }

    
    editTask(taskId, newName) {
        let task = this.tasks.find(task => task.id === taskId); 
        if (task) task.changeName(newName); 
        this.renderTasks();
    }

    // Установка фильтра и обновление отображения
    filterTasks(filter) {
        this.filter = filter; // Устанавливаем текущий фильтр
        this.renderTasks(); 
    }

    // Отобр з в соот с фил
    renderTasks() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = ''; // Очищаем список

        // Фильтр з в завиc от тек фил
        let filteredTasks = this.tasks;
        if (this.filter === 'completed') {
            filteredTasks = this.tasks.filter(task => task.state); 
        } else if (this.filter === 'pending') {
            filteredTasks = this.tasks.filter(task => !task.state); 
        } else if (this.filter === 'delete') {
            this.tasks.forEach((task) => {
                this.deleteTask(task.id); //Удаляем все з
            });
            filteredTasks = this.tasks; //Обн
        }

        
        filteredTasks.forEach(task => {
            const taskElement = document.createElement('li'); // Создаем эл списка
            taskElement.classList.add('task'); // класс для стиля

            // Создаем флажок состояния задачи
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.state; // Уст сост ф
            checkbox.onclick = () => {
                task.changeState(); // Мен сост з при клике
                this.renderTasks(); 
            };

            // эл для отобр названия задачи
            const taskName = document.createElement('span');
            taskName.textContent = task.name;

            // Кнопка редактирования задачи
            const editButton = document.createElement('button');
            editButton.textContent = 'Редактировать';
            editButton.id = "edit";
            editButton.onclick = () => {
                const newName = prompt('Введите новое название задачи:', task.name);
                if (newName) this.editTask(task.id, newName); // Изм назв задачи
            };

            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.onclick = () => this.deleteTask(task.id); // Удаляем задачу

            // Добавляем эл задачи
            taskElement.appendChild(checkbox);
            taskElement.appendChild(taskName);
            taskElement.appendChild(editButton);
            taskElement.appendChild(deleteButton);

            taskList.appendChild(taskElement); // add задачу в HTML-список
        });

        //стили для списка задач
        let ul = document.getElementsByTagName("ul");
        if (filteredTasks.length != 0) {
            ul[0].style.border = "yellow 2px solid"; // з, добавляем рамку
        } else {
            ul[0].style.border = ""; // задач!, убираем рамку
        }
    }
}


const todoList = new Todolist();
let taskIdCounter = 1; // Счетчик для уникальных ид задач


function addTask() {
    const taskInput = document.getElementById('taskInput'); // Получаем поле ввоа
    const taskName = taskInput.value.trim(); // Получ введ назв
    if (taskName) {
        const newTask = new Task(taskIdCounter++, taskName); // Созд новую задачу
        todoList.addTask(newTask); 
        taskInput.value = ''; 
    }
}


function filterTasks(filter) {
    todoList.filterTasks(filter); // Прим филь к списку задач
}
