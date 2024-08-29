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


