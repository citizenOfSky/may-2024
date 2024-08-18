// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
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

for (let i = 0; i < users.length; i++) {
    const user = users[i];
        document.write(`<div>
            <p>name: ${user.name}, username: ${user.username}, password: ${user.password}</p>
        </div>`)
}
document.write(`<hr>`)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let minerals = [
    {id: 1, name: 'Diamond', chemical_formula: 'C'},
    {id: 2, name: 'Corundum', chemical_formula: 'Al2O3'},
    {id: 3, name: 'Topaz', chemical_formula: 'Al2SiO4(OH,F)2'},
    {id: 4, name: 'Quartz', chemical_formula: 'SiO2'},
    {id: 5, name: 'Orthoclase', chemical_formula: 'KAISi3O8'},
    {id: 6, name: 'Apatite', chemical_formula: 'Ca5(PO4)3(OH,Cl,F)'},
    {id: 7, name: 'tFluorite', chemical_formula: 'CaF2'},
    {id: 8, name: 'Calcite', chemical_formula: 'CaCO3'},
    {id: 9, name: 'tGypsum', chemical_formula: 'CaSO4·2H2O'},
    {id: 10, name: 'Talc', chemical_formula: 'Mg3Si4O10(OH)2'},
];

for (let i = 0; i < minerals.length; i++) {
    const mineral = minerals[i];
        document.write(`<div>
            <p>id: ${mineral.id}, name: ${mineral.name}, chemical_formula: ${mineral.chemical_formula}</p>
        </div>`)
}
document.write(`<hr>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
{
    let locations = [
        {"title": "м. Київ", "type": "city"},
        {"title": "Житомирська область", "type": "oblast"},
        {"title": "Харківська область", "type": "oblast"},
        {"title": "Вінницька область", "type": "oblast"},
        {"title": "Чернігівська область", "type": "oblast"},
        {"title": "Дніпропетровська область", "type": "oblast"},
        {"title": "Черкаська область", "type": "oblast"},
        {"title": "Волинська область", "type": "oblast"},
        {"title": "Київська область", "type": "oblast"},
        {"title": "Миколаївська область", "type": "oblast"},
        {"title": "Рівненська область", "type": "oblast"},
        {"title": "Сумська область", "type": "oblast"},
        {"title": "Тернопільська область", "type": "oblast"},
        {"title": "Краматорський район", "type": "raion"},
        {"title": "Кіровоградська область", "type": "oblast"},
        {"title": "Хмельницька область", "type": "oblast"},
        {"title": "Запорізька область", "type": "oblast"},
        {"title": "Одеська область", "type": "oblast"},
        {"title": "Полтавська область", "type": "oblast"},
        {"title": "Львівська область", "type": "oblast"},
        {"title": "м. Кривий Ріг", "type": "city"}
    ];

    let i = 0;
    while (i < locations.length) {
        let location = locations[i]
        document.write(`<div>
            <h1>"title": ${location.title}, "type": ${location.type}</h1>
        </div>`)
        i++;
    }
}
document.write(`<hr>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let locations = [
    {id: 1, "title": "м. Київ", "type": "city"},
    {id: 2,"title": "Житомирська область", "type": "oblast"},
    {id: 3,"title": "Харківська область", "type": "oblast"},
    {id: 4,"title": "Вінницька область", "type": "oblast"},
    {id: 5,"title": "Чернігівська область", "type": "oblast"},
    {id: 6,"title": "Дніпропетровська область", "type": "oblast"},
    {id: 7,"title": "Черкаська область", "type": "oblast"},
    {id: 8,"title": "Волинська область", "type": "oblast"},
    {id: 9,"title": "Київська область", "type": "oblast"},
    {id: 10,"title": "Миколаївська область", "type": "oblast"},
    {id: 11,"title": "Рівненська область", "type": "oblast"},
    {id: 12,"title": "Сумська область", "type": "oblast"},
    {id: 13,"title": "Тернопільська область", "type": "oblast"},
    {id: 14,"title": "Краматорський район", "type": "raion"},
    {id: 15,"title": "Кіровоградська область", "type": "oblast"},
    {id: 16,"title": "Хмельницька область", "type": "oblast"},
    {id: 17,"title": "Запорізька область", "type": "oblast"},
    {id: 18,"title": "Одеська область", "type": "oblast"},
    {id: 19,"title": "Полтавська область", "type": "oblast"},
    {id: 20,"title": "Львівська область", "type": "oblast"},
];

let i = 0;
while (i < locations.length) {
    let location = locations[i]
    document.write(`<div>
            <h1>id: ${location.id}, "title": ${location.title}, "type": ${location.type}</h1>
        </div>`)
    i++;
}
document.write(`<hr>`)

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let listOfItem of listOfItems) {
    document.write(`<ul>
        <li>${listOfItem}</li>
    </ul>`)
}
document.write(`<hr>`)

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let productsKey of products) {
    document.write(`<div class="product-card">
            <h3 class="product-title">${productsKey.title}. Prise - ${productsKey.price}</h3>
            <img src="${productsKey.image}" alt="" class="product-image"/>
            </div>`)
}
document.write(`<hr>`)

// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
{
    let users = [
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
    ]
    for (let user of users) {
        if (user.status === true)
            document.write(`<div>
                <p>name: ${user.name}, age: ${user.age}, status: ${user.status}</p>
            </div>`)
    }
    document.write(`<hr>`)

    for (let user of users) {
        if (user.status === false)
            document.write(`<div>
                <p>name: ${user.name}, age: ${user.age}, status: ${user.status}</p>
            </div>`)
    }
    document.write(`<hr>`)

    for (let user of users) {
        if (user.age > 30)
            document.write(`<div>
                <p>name: ${user.name}, age: ${user.age}, status: ${user.status}</p>
            </div>`)
    }
}