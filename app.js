const newTask = {
  tasks: [
    {
      id: 1,
      name: 'тест',
      description: 'описание',
      order: 0
    }
  ],

  // 1. Метод добавления (учитываем name, description и order)
  add(name, description, order) {
    const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push({ id, name, description, order });
  },

  // 2. Метод удаления
  remove(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  },

  // 3. Метод обновления (учитываем новые поля)
  update(id, updates) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      if (updates.name) task.name = updates.name;
      if (updates.description) task.description = updates.description;
      if (updates.order !== undefined) task.order = updates.order;
    }
  },

  // 4. Сортировка по полю order
  sortByOrder() {
    this.tasks.sort((a, b) => a.order - b.order);
  }
};

// --- ПОСЛЕДОВАТЕЛЬНОЕ ПРИМЕНЕНИЕ ВСЕХ МЕТОДОВ ---

// 1. Добавляем новую задачу
newTask.add('Сходить в спортзал', 'Тренировка ног', 2);
newTask.add('Почитать книгу', 'Прочитать 20 страниц', 1);

// 2. Обновляем первую задачу (тестовую)
newTask.update(1, { name: 'Исправленный тест', order: 5 });

// 3. Удаляем одну из задач (например, с id: 2)
newTask.remove(2);

// 4. Сортируем оставшиеся задачи по порядку (order)
newTask.sortByOrder();

// Вывод результата
console.log(newTask.tasks);