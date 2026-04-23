interface BasicTask {
  id: number;
  name: string;
  order: number;
}

// Расширяем функционал
interface DetailedTask extends BasicTask {
  description: string;
}

const newTask: { tasks: DetailedTask[] } = {
  tasks: [{ 
    id: 1, 
    name: 'тест', 
    description: 'описание',
    order: 0
  }]
};