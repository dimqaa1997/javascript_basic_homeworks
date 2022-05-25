window.addEventListener("DOMContentLoaded", (e) => {

    // Task 1
    (function () {

        function getResult(result, input=0, showRes = false) {
            const res = document.querySelector('[data-res]');
            res.classList.add('active');
            res.classList.remove('hide');
            if (showRes) {
                res.textContent = `Температура по Цельсию: ${input} ℃ `
                res.textContent += ` Температура по Фаренгейту: ${result} ℉`;
            } else {
                res.textContent = `Неверный формат данных: ${result} Кажется, Вы ввели не число. Попробуйте снова.`;
            }
        }

        document.querySelector('#red-btn').addEventListener('click', (e) => {
            const input = document.querySelector('#input_1').value;

            const result = (9 / 5) * +input + 32;
            console.log(typeof result);
            if (isNaN(result)) {
                getResult(input);
            } else {
                getResult(result, input, true)
                console.log(`[RESULT]: ${result}`);
            }
            document.querySelector('#input_1').value = "";

        })


    }());

    // Task 2
    (function (){
        const name = 'Sherlock Holmes';
        const admin = name;

        console.log(`name: ${name}`);
        console.log(`admin: ${admin}`);
    }());

    // Task 3
    // Вывод будет 1000108, тк конкатенация имеет более высокий приоритет по сравнению со сложением.
    // Поэтому интерпритатор приводит число к строке и склевает две строки.
    console.log(1000 + '108');

    // Task 4
    // Атрибуты async и defer сообщают браузеру, что скрипты с такими атрибутами должны загружаться в фоновом режиме
    // тем самым не блокируют загрузку DOM дерева.
    // defer - скрипт с такрим атрибутом выполнится только после загрузки DOM дерева. Это позволяет задавать порядок
    // скриптов и быть увереным, что все сработает верно
    // async - скрипт с такрим атрибутом выполнится сразу после загрузки. То есть async вообщи никого не ждет и полностью
    // незваисим от окружающего мира. Весь окружающий мир тоже не ждет скрипт с атрибутом async.

})