/**
 * Основная функция калькулятора
 * @param {string} operation - символ математической операции
 */
function calculate(operation) {
    // 1. Получаем элементы из DOM
    const num1Element = document.getElementById('num1');
    const num2Element = document.getElementById('num2');
    const resultElement = document.getElementById('result');

    // 2. Получаем значения и преобразуем их в числа
    const n1 = parseFloat(num1Element.value);
    const n2 = parseFloat(num2Element.value);

    // 3. Проверка: введены ли числа
    if (isNaN(n1) || isNaN(n2)) {
        resultElement.textContent = 'Ошибка (введите числа)';
        return;
    }

    // 4. Логика математических операций
    let result;
    switch (operation) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            // Проверка деления на ноль
            if (n2 === 0) {
                result = 'На 0 делить нельзя';
            } else {
                result = n1 / n2;
            }
            break;
        default:
            result = 'Неизвестная операция';
    }

    // 5. Вывод результата на страницу
    resultElement.textContent = result;
}
