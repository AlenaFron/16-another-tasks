// 1. Объект из предыдущего ДЗ (исходный «движок» с методами)
const ToDoList = {
    // Добавить задачу
    add(title, priority) {
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        this.tasks.push({ title, id, priority });
    },

    // Удалить задачу по id
    remove(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },

    // Обновить имя или приоритет по id
    update(id, updates) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            if (updates.title) task.title = updates.title;
            if (updates.priority) task.priority = updates.priority;
        }
    },

    // Отсортировать по приоритету
    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
};

// 2. Новый объект newTask (только данные)
const newTask = {
    tasks: [{ 
        id: 1, 
        title: 'тест', 
        description: 'описание',
        priority: 0
    }]
};

// 3. ПОСЛЕДОВАТЕЛЬНОЕ ПРИМЕНЕНИЕ ВСЕХ МЕТОДОВ К newTask
// Используем .call(), чтобы методы ToDoList работали с массивом внутри newTask

// [Метод ADD]: Добавляем новую задачу
ToDoList.add.call(newTask, 'Купить продукты', 2);

// [Метод ADD]: Добавляем еще одну задачу для наглядности сортировки
ToDoList.add.call(newTask, 'Помыть машину', 1);

// [Метод UPDATE]: Обновляем первую задачу (id: 1)
ToDoList.update.call(newTask, 1, { title: 'Обновленный тест', priority: 5 });

// [Метод SORT]: Сортируем задачи по приоритету
ToDoList.sortByPriority.call(newTask);

// [Метод REMOVE]: Удаляем задачу с id: 2
ToDoList.remove.call(newTask, 2);

// Итоговый результат
console.log('Результат применения всех методов к newTask:');
console.log(newTask.tasks);