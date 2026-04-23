// 1. Объект из предыдущего домашнего задания с методами
const ToDoList = {
    // Метод добавления задачи
    add(name, description, order) {
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        this.tasks.push({ id, name, description, order });
    },

    // Удаление задачи по id
    remove(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },

    // Обновить данные по id
    update(id, updates) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            Object.assign(task, updates);
        }
    },

    // Сортировка по порядку (order)
    sortByOrder() {
        this.tasks.sort((a, b) => a.order - b.order);
    }
};

// 2. Новый объект newTask с исходными данными
const newTask = {
    tasks: [{ 
        id: 1, 
        name: 'тест', 
        description: 'описание',
        order: 0
    }]
};

// 3. ПОСЛЕДОВАТЕЛЬНОЕ ПРИМЕНЕНИЕ МЕТОДОВ к объекту newTask
// Используем .call(), чтобы передать newTask в качестве контекста (this)

console.log('Исходный объект:', JSON.parse(JSON.stringify(newTask.tasks)));

// Применяем метод add
ToDoList.add.call(newTask, 'Вторая задача', 'Сделать ревью', 10);
console.log('После add:', newTask.tasks);

// Применяем метод update (меняем описание первой задачи)
ToDoList.update.call(newTask, 1, { description: 'новое описание' });
console.log('После update:', newTask.tasks);

// Применяем метод sortByOrder (добавим задачу с меньшим порядком для проверки)
ToDoList.add.call(newTask, 'Срочно', 'Применить методы', -1);
ToDoList.sortByOrder.call(newTask);
console.log('После sortByOrder:', newTask.tasks);

// Применяем метод remove (удаляем тестовую задачу с id: 1)
ToDoList.remove.call(newTask, 1);
console.log('Финальный результат после remove:', newTask.tasks);