// 1. Исходный объект из предыдущего задания с методами
const ToDoList = {
  // Метод добавления задачи
  add(title, priority) {
    const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push({ id, title, priority });
  },

  // Удаление по id
  remove(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  // Обновление по id
  update(id, updates) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      if (updates.title) task.title = updates.title;
      if (updates.priority) task.priority = updates.priority;
    }
  },

  // Сортировка по приоритету
  sortByPriority() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

// 2. Новый объект newTask с расширенной структурой
const newTask = {
  tasks: [
    { 
      id: 1, 
      name: 'тест', 
      description: 'описание', 
      order: 0 
    }
  ]
};

// 3. ПОСЛЕДОВАТЕЛЬНОЕ ПРИМЕНЕНИЕ МЕТОДОВ к newTask
// Чтобы применить методы ToDoList к newTask, используем .call() или .bind()
// Это позволяет методам 'видеть' массив tasks внутри newTask

console.log('--- Исходное состояние newTask ---', newTask.tasks);

// Применяем метод add (адаптируем аргументы под новые поля: name -> title, order -> priority)
ToDoList.add.call(newTask, 'Новая задача', 2);
console.log('После add:', newTask.tasks);

// Применяем метод update (меняем имя и порядок)
ToDoList.update.call(newTask, 1, { title: 'Обновленное имя', priority: 5 });
console.log('После update:', newTask.tasks);

// Применяем метод sortByPriority (сортировка по полю priority/order)
ToDoList.sortByPriority.call(newTask);
console.log('После sortByPriority:', newTask.tasks);

// Применяем метод remove
ToDoList.remove.call(newTask, 2);
console.log('После remove (финальный результат):', newTask.tasks);