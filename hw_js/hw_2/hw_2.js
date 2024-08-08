// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
array = [
    'banana',
    'pear',
    'apple',
    'grape',
    'strawberry',
    'pineapple',
    'coconut',
    'peach',
    'apricot',
    'plum',
]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_1 = {
    title: "A Nation's Cultural History",
    pageCount: 256,
    genre: 'non-fiction',
}
let book_2 = {
    title: 'Atomic Habits',
    pageCount: 320,
    genre: 'non-fiction',
}
let book_3 = {
    title: 'The Culture Map',
    pageCount: 288,
    genre: 'non-fiction',
}
console.log(book_1, book_2, book_3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
    let book_1a = {
    title: "A Nation's Cultural History",
    pageCount: 256,
    genre: 'non-fiction',
    author: [
        {
            name: 'Alisa Lozhkina',
            age: 25
        }

    ]
}
    let book_2a = {
    title: 'Atomic Habits',
    pageCount: 320,
    genre: 'non-fiction',
    author: [
        {
            name: 'James Clear',
            age: 25
        }

    ]
}
    let book_3a = {
    title: 'The Culture Map',
    pageCount: 288,
    genre: 'non-fiction',
    author: [
        {
            name: 'Erin Meyer',
            age: 25
        }

    ]
}
    console.log(book_1a, book_2a, book_3a);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Aleks', username: 'halk', password: 1234},
    {name: 'Oleg', username: 'bober', password: 5648},
    {name: 'Lesya', username: 'kvitka', password: 8469},
    {name: 'Oleksa', username: 'nikita', password: 7842},
    {name: 'Mykyta', username: 'cowboy', password: 5493},
    {name: 'Karyna', username: 'vyskochka', password: 4836},
    {name: 'Olga', username: 'queen', password: 9618},
    {name: 'Victor', username: 'driver', password: 8210},
    {name: 'Victoria', username: 'malina', password: 6928},
    {name: 'Albina', username: 'volonter', password: 8106},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
let temperature = [
    Monday = {
        morning: 9,
        day: 15,
        evening: 10,
    },
    Tuesday = {
        morning: 9,
        day: 11,
        evening: 9,
    },
    Wednesday = {
        morning: 15,
        day: 20,
        evening: 18,
    },
    Thursday = {
        morning: 14,
        day: 16,
        evening: 12,
    },
    Friday = {
        morning: 22,
        day: 25,
        evening: 21,
    },
    Saturday = {
        morning: 21,
        day: 28,
        evening: 25,
    },
    Sunday = {
        morning: 22,
        day: 26,
        evening: 20,
    },
]
console.log(temperature);

let week_temperature = [
{
    Monday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
{
    Tuesday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
{
    Wednesday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
{
    Thursday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
{
    Friday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
{
    Saturday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
{
    Sunday: [
        {
        morning: 9,
        day: 15,
        evening: 10,
        }
    ]
},
]
console.log(week_temperature);

let temperatureOfWeek = [
    {Monday: [morning = 9, day = 12, evening = 11]},
    {Tuesday: [morning = 14, day = 18, evening = 13]},
    {Wednesday: [morning = 10, day = 15, evening = 14]},
    {Thursday: [morning = 18, day = 20, evening = 16]},
    {Friday: [morning = 15, day = 25, evening = 19]},
    {Saturday: [morning = 11, day = 19, evening = 17]},
    {Sunday: [morning = 20, day = 28, evening = 26]},
]
console.log(temperatureOfWeek);

let temperature_of_week = [
    {Monday: [{morning: 12,afternoon: 15,evening: 10}]},
    {Tuesday: [{morning: 8,afternoon: 16,evening: 11}]},
    {Wednesday: [{morning: 6,afternoon: 11,evening: 12}]},
    {Thursday: [{morning: 5,afternoon: 10,evening: 13}]},
    {Friday: [{morning: 7,afternoon: 12,evening: 11}]},
    {Saturday: [{morning: 3,afternoon: 14,evening: 14}]},
    {Sunday: [{morning: 4,afternoon: 10,evening: 13}]},
]
console.log(temperature_of_week);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 10;
if (x!==0){
    console.log(true)
}
else{
    console.log(false)
}

let a = 1;
if (a!==0){
    console.log(true)
}
else{
    console.log(false)
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

let time = 15;
if (time <=15 && time >=0){
    console.log('first quarter');
}
else if (time <=30 && time > 15){
    console.log('second quarter');
}
else if(time <=45 && time >30){
    console.log('third quarter');
}
else if(time <=59 && time >45){
    console.log('fourth quarter ')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let ordinal_day_of_the_week = 3;
switch (ordinal_day_of_the_week){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num_1 = 5;
let num_2 = 5;
if (num_1 > num_2){
    console.log(num_1);
}
else if (num_2>num_1){
    console.log(num_2);
}
else if (num_1===num_2){
    console.log('the numbers are equal')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//         (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).