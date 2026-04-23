/// 1. Объект из предыдущего домашнего задания (со всеми методами)
const ToDoList = {
  tasks: [],

  add(title, priority) {
    const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push({ title, id, priority });
  },

  remove(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  update(id, updates) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      if (updates.title) task.title = updates.title;
      if (updates.priority) task.priority = updates.priority;
    }
  },

  sortByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

// 2. Новый объект newTask (согласно текущему заданию)
const newTask = {
    tasks: [{ 
        id: 1, 
        name: 'тест', 
        description: 'описание',
        order: 0
    }]
};

// 3. ПОСЛЕДОВАТЕЛЬНОЕ ПРИМЕНЕНИЕ МЕТОДОВ к newTask
console.log('--- Применение методов к newTask ---');

// Используем метод add: передаем name как title и order как priority
newTask.tasks.forEach(task => {
    ToDoList.add(task.name, task.order);
});
console.log('После добавления:', ToDoList.tasks);

// Используем метод update: обновим название первой задачи из newTask
ToDoList.update(1, { title: 'Обновленный тест' });
console.log('После обновления (ID 1):', ToDoList.tasks);

// Используем метод sortByPriority
ToDoList.sortByPriority();
console.log('После сортировки:', ToDoList.tasks);

// Используем метод remove: удаляем задачу, которую добавили
ToDoList.remove(1);
console.log('После удаления (ID 1):', ToDoList.tasks);