// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareOfRect(a, b) {
    return a * b;
}
let rect1 = squareOfRect(7,8);
console.log(rect1)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareOfCircle(r) {
    return Math.PI * r ** 2;
}
let circle1 = squareOfCircle(12);
console.log(circle1)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareOfCylinder(r, h) {
    return 2 * (Math.PI * r ** 2) + 2 * Math.PI * r * h
}
let cylinder1 = squareOfCylinder(11, 18);
console.log(cylinder1);

// - створити функцію яка приймає масив та виводить кожен його елемент
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
];
function outputArr() {
    for (const user of users) {
        console.log(user)
    }
}
outputArr(users)

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraph(paragraph) {
    // let p = <p>${paragraph}</p>;
    document.write(`<p>${paragraph}</p>`)
}
paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus impedit quis quo!')

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function outputList(list) {
    document.write(`
        <ul>
            <li>${list}</li>
            <li>${list}</li>
            <li>${list}</li>
        </ul>
    `)
}
outputList('JavaScript')

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function outputMass(list, amount) {
    document.write(`<ul>`)
    for (let i = 0; i < amount; i++) {
        // const listElement = list[i];
        document.write(`<li>${list}</li>`)
    }
    document.write(`</ul>`)
}

outputMass('TypeScript', 12)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
let items = ['html', 'css', true, false, 456, -666];
function outputArray() {
    document.write(`<ul>`)
    for (const item of items) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
outputArray()

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let students = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
]

function group() {
    for (const student of students) {
        document.write(`
            <div>
                <p>id: ${student.id}, name: ${student.name}, age: ${student.age}</p>
            </div>
           `)
    }
}
group();

// - створити функцію яка повертає найменьше число з масиву
let numbers = [128, 1001, -457, 0, -8888, 100008];

function minNumber(minN) {
    let min = numbers[0];
    for (const minN of numbers) {
        if (minN < min) {
            min = minN;
        }
        else {
        }
    }
    return min;
}
minNumber()
console.log(minNumber())

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let mass = [128, 1001, -457, 0, -8888, 100008];
function sum(arr) {
    let sum = mass[0]
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    return mass
}
sum(mass)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let massOfNums = [11,22,33,44]
function swap(arr, index1, index2) {
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;
    return arr;
}
singleMass = swap(massOfNums, 0, 1) ;
console.log(singleMass);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    if (exchangeCurrency === 'USD' && currencyValues[0].value === 25) {
        return sumUAH / currencyValues[0].value
    }
    if(exchangeCurrency === 'EUR' && currencyValues[1].value === 42) {
        return sumUAH / currencyValues[1].value
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
