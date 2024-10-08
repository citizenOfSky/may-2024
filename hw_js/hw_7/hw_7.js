// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
//
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    console.log(this)
}
let users = [
    new User(5,'vasya', 'kokos', '@', '+0987654321'),
    new User(7,'kolya',  'kokos', '@','+09876543213'),
    new User(8,'olya',  'kokos', '@', '+0987654321'),
    new User(10,'max',  'kokos', '@', '+0987654321'),
    new User(1,'anya', 'kokos', '@', '+0987654321'),
    new User(6,'oleg', 'kokos', '@', '+0987654321'),
    new User(2,'andrey', 'kokos', '@','+0987654321'),
    new User(3,'masha', 'kokos', '@', '+0987654321'),
    new User(9,'olya',  'kokos', '@', '+0987654321'),
    new User(4,'max',  'kokos', '@', '+0987654321'),
];

console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredusers = users.filter(function (value) {
    return value.id % 2 === 0;
})
console.log(filteredusers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((user1, user2) => {
    return user1.id - user2.id;
})
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
        console.log(this);
    }
}
let clients = [
    new Client(1,'vasya', 'kokos', '@', '+0987654321', [
        'banana',
        'apricot',
        'plum',
    ]),
    new Client(2,'kolya',  'kokos', '@', '+0987654321', [
        'peach',
        'apricot',
        'plum',
    ]),
    new Client(3,'olya',  'kokos', '@', '+0987654321', [
        'banana',
        'pear',
        'apple',
        'grape',
    ]),
    new Client(4,'max',  'kokos', '@', '+0987654321', [
        'banana',
        'pear',
        'peach',
        'apricot',
        'plum',
    ]),
    new Client(5,'anya', 'kokos', '@', '+0987654321', [
        'banana',
        'apricot',
        'plum',
    ]),
    new Client(6,'oleg', 'kokos', '@', '+0987654321', [
        'banana',
        'pear',
    ]),
    new Client(7,'andrey', 'kokos', '@', '+0987654321', [
        'coconut',
        'peach',
        'apricot',
        'plum',
    ]),
    new Client(8,'masha', 'kokos', '@', '+0987654321', [
        'banana',
        'apricot',
        'plum',
    ]),
    new Client(9,'olya',  'kokos', '@', '+0987654321', [
        'banana',
        'plum',
    ]),
    new Client(10,'max',  'kokos', '@', '+0987654321', [
        'peach',
        'apricot',
        'plum',
    ]),
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sorted =  clients.sort ((order1, order2) => {
    return order1.order.length - order2.order.length;
});
console.log(sorted);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, yearOfProduction, topSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.yearOfProduction = yearOfProduction;
    this.topSpeed = topSpeed;
    this.engineCapacity = engineCapacity;
    console.log(this);
}

let car1 = new Car('Audi Q8', 'Volkswagen AG', 2024, 250, 507);

Car.prototype.drive = function () {
    return `їдемо зі швидкістю ${this.topSpeed} на годину`;
};
console.log(car1.drive());

Car.prototype.info = function () {
    for (const key in this) {
        console.log(key, this[key]);
    }
}
car1.info();

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.topSpeed = this.topSpeed + newSpeed;
    return this.topSpeed;
}
console.log(car1.increaseMaxSpeed(25));

Car.prototype.changeYear = function (newValue) {
    return this.yearOfProduction = newValue;
}
console.log(car1.changeYear(2023));

Car.prototype.addDriver = function (driver) {
    return this.driver = driver;
}
console.log(car1.addDriver({}));

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
{
    class Auto {

        constructor(model, producer, yearOfProduction, topSpeed, engineCapacity) {
            this.model = model;
            this.producer = producer;
            this.yearOfProduction = yearOfProduction;
            this.topSpeed = topSpeed;
            this.engineCapacity = engineCapacity;
        }

        drive() {
            console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`)
        };

        info() {
            for (const key in this) {
                console.log(key, this[key]);
            }
        }
        increaseMaxSpeed (newSpeed) {
            this.topSpeed = this.topSpeed + newSpeed;
        }

        changeYear (newValue) {
            this.yearOfProduction = newValue;
        }

        addDriver (driver) {
            this.driver = driver;
        }
    }
        car1 = new Auto('Audi Q8', 'Volkswagen AG', 2024, 250, 507);
        console.log(car1)
        car1.drive();
        car1.info();
        car1.increaseMaxSpeed(25);
        car1.changeYear(2023);
        car1.addDriver({});
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

const popelushky = [
    new Popelushka('popelushka1', 18, 38),
    new Popelushka('popelushka2', 19, 35),
    new Popelushka('popelushka3', 20, 36),
    new Popelushka('popelushka4', 21, 32),
    new Popelushka('popelushka5', 18, 33),
    new Popelushka('popelushka6', 19, 31),
    new Popelushka('popelushka7', 21, 37),
    new Popelushka('popelushka8', 20, 40),
    new Popelushka('popelushka9', 18, 39),
    new Popelushka('popelushka10', 19, 34),
]

class Prince{

    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const prince = new Prince (name, Prince.age, 34)

for (const popelushka of popelushky) {
    if (popelushka.size === prince.shoe){
        prince.princess = popelushka;
    }
}
console.log(prince.princess)

const popelushkaFinder = popelushky.find(popelushka => popelushka.size === prince.shoe);
prince.princess = popelushkaFinder;
console.log(popelushkaFinder);

// *Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};
[5, 6, 35, 87].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
}

let students = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = students.myFilter((student) => student.status);
console.log(result);
