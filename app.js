// 1. Объект из предыдущего ДЗ с методами управления задачами
const taskManager = {
    tasks: [],
    
    // Метод добавления (например, из прошлого задания)
    addTask(task) {
        this.tasks.push(task);
        console.log(`Задача "${task.name}" добавлена.`);
    },

    // Метод вывода всех задач (базовый функционал)
    printTasks() {
        console.log("Список задач:");
        this.tasks.forEach(task => {
            console.log(`${task.order}. [ID: ${task.id}] ${task.name}`);
        });
    }
};

// 2. Новый объект newTask согласно текущему требованию
const newTask = {
    tasks: [{ 
        id: 1, 
        name: 'тест', 
        description: 'описание', // Новое поле
        order: 0
    }]
};

// 3. ПРИМЕНЕНИЕ МЕТОДОВ (то, на что указал ревьюер)
// Мы берем методы из старого объекта и последовательно применяем их к новым данным
console.log("--- Выполнение методов ---");

newTask.tasks.forEach(task => {
    // Используем call/apply или просто передаем данные в методы старого объекта
    taskManager.addTask(task); 
});

// Вызываем основной метод отображения
taskManager.printTasks();