/*1. Напишите функцию, которая добавляет в существующий массив (можно пустой) города Беларуси. Если в качестве параметра ничего не передается в функцию, то при каждом ее вызове, новый город запрашивается через prompt, иначе новые города можно добавить одним параметром - текстом городов через запятую. Выведите получившийся массив в алфавитном порядке.*/
{
    let cities = [];

    function citiesOfBelarus(newCities) {
        if (typeof newCities === 'undefined') {
            let city = prompt("Введите название города Беларуси");
            if (city) {
                cities.push(city.trim());
            }
        } else {
            newCities.split(',').forEach(city => 
            cities.push(city.trim()));
        }
        cities.sort();
        
        console.log("Города Беларуси", cities);
    }

    citiesOfBelarus();
    citiesOfBelarus('Минск, Ивье, Лида, Гродно, Новогрудок');
    citiesOfBelarus();
}

/*2. Создайте двумерный массив [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']]. Используя вложенные циклы вывести в консоль строки вида: "Иван из Минск", "Катя из Брест", "Ольга из Гродно", "Максим из Могилев". Создайте массив с расстояниями до городов от Минска (нулевой км). Выведите информацию о расстоянии между Иваном и Максимом. Предусмотрите возможность запрашивать расстояние между другими людьми.*/
{
    let arr = [['Иван', 'Катя', 'Ольга', 'Максим'], ['Минск', 'Брест', 'Гродно', 'Могилев']];

    let arr1 = [];

    for(let i = 0; i < arr[0].length; i++) {
        for(let a = 0; a < arr[1].length; a++) {
            if (i === a) {
                console.log(`${arr[0][i]} из ${arr[1][a]}`)
            }
        }
    }

    let distance = [0, 344, 280, 200];

    function getDistance(index1, index2) {
        let distances = Math.abs(distance[index1] - distance[index2]);

        console.log(`Расстояние между ${arr[0][index1]} из ${arr[1][index1]} и ${arr[0][index2]} из ${arr[1][index2]} составляет ${distances} км.`)
    }

    getDistance(0, 3);
}

/*3. Напишите функцию, которая принимает две даты и возвращает количество дней между ними. В зависимости от значения, выведите: "дата уже близко" (< 3 дней), "еще есть время" (от 3 до 7), "далековато еще" (> 7 дней).*/
{
    function countingDays(date1, date2) {
        let oneDay = 24 * 60 * 60 * 1000;

        let timeDifference = Math.abs(new Date(date1) - new Date(date2));

        let daysDifference = Math.ceil(timeDifference / oneDay);

        if (daysDifference < 3) {
            console.log("Дата уже близко");
        } else if (daysDifference >= 3 && daysDifference <= 7) {
            console.log("Еще есть время");
        } else {
            console.log("Далековато еще");
        }
    }

    countingDays("2024-11-28", "2024-11-30"); // Дата уже близко
    countingDays("2024-11-28", "2024-12-02"); // Еще есть время
    countingDays("2024-11-28", "2024-12-31"); // Далековато еще
}

/*4. Напишите функцию celsiusToFahrenheit(celsius), которая конвертирует температуру из градусов Цельсия в градусы Фаренгейта. В зависимости от температуры, выведите предупреждение: "сегодня прохладнее, чем обычно" (от 5 до 10), "одевайтесь теплее" (от 0 до 5), "сегодня очень холодно" (меньше 0 и до -5), "оставайтесь дома" (< -5).*/
{
    function celsiusToFahrenheit(celsius) {
        let fahrenheit = (celsius * 9/5) + 32;

        if (celsius > 5 && celsius <= 10) {
            console.log("Сегодня прохладнее, чем обычно");
        } else if (celsius > 0 && celsius <= 5) {
            console.log("Одевайтесь теплее");
        } else if (celsius > -5 && celsius < 0) {
            console.log("Сегодня очень холодно");
        } else if (celsius < -5) {
            console.log("Оставайтесь дома");
        }
    
        return fahrenheit;
    }

    console.log(celsiusToFahrenheit(-10));
}

/*5. Функция выбора случайного элемента из массива: Создайте функцию randomElement(arr), которая возвращает случайный элемент из переданного массива.*/
{
    function randomElement(arr) {
        if (arr.length === 0) {
            return 'Error';
        }

        let random = Math.floor(Math.random() * arr.length);

        return arr[random];
    }

    console.log(randomElement([1, 24, 75, -10, 1234, 87]));
}

/*6. Шифр Цезаря: Напишите функцию, которая шифрует латинскую строку с помощью шифра Цезаря с заданным сдвигом. Например: "table" со сдвигом 2 будет "vcdng". Каждая буква "table" имеет свой номер в таблице ASCI (116, 97, 98, 108, 101). Создайте вторую функцию, которая будет расшифровывать текст, если передать правильный ключ сдвига.*/
{
    function cypher(text, shift) {
        let result = '';

        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            if (/[a-zA-Z]/.test(char)) {
                let code = char.charCodeAt();
    
                let base = char >= 'a' && char <= 'z' ? 97 : 65;
    
                char = String.fromCharCode(((code - base + shift) % 26) + base);
            }
            result += char;
        }
        return result;
    }

    function decoding(text, shift) {
        return cypher(text, -shift);
    }

    let text = "abcd";
    let shift = 2;

    let encryptionText = cypher(text, shift);
    console.log(`Зашифрованный текст: ${encryptionText}`);

    let transcriptText = decoding(encryptionText, shift);
    console.log(`Расшифрованный текст: ${transcriptText}`);
}

/*7. Напишите программу, которая генерирует случайным образом новый пароль, состоящий из 8 чисел (параметром можно задавать длину) и возвращает результат. По желанию, доработайте функцию: сделайте генератор паролей из латинских символов, целых чисел и специальных символов: _-,.&*^$#@+=!; минимум один большой символ, одна цифра, один спец. символ.*/
{
    function generationPassword(length) {
        if (length < 4) {
            return ('Длина пароля должна быть минимум 4 символа.');
        }

        let capitalLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
        let lowercaseLetters = 'qwertyuiopasdfghjklzxcvbnm';
        let numbers = '1234567890';
        let specialChar = '_-,.&*^$#@+=!';

        let password = [capitalLetters.charAt(Math.floor(Math.random() * capitalLetters.length)), numbers.charAt(Math.floor(Math.random() * numbers.length)),specialChar.charAt(Math.floor(Math.random() * specialChar.length))];

        let allCategories = capitalLetters + lowercaseLetters + numbers + specialChar;

        for (let i = password.length; i < length; i++) {
            let indexRandom = Math.floor(Math.random() * allCategories.length);
            password.push(allCategories[indexRandom]);
        }
        password = password.join('');

        return password;
    }

    console.log(generationPassword(8));
}