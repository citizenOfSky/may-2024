// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function copier(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionCopy = obj[key].bind({});
                functions.push({functionCopy, key});


            }
        }
        console.log(functions);
        // const s = JSON.stringify(obj);
        // const parse = JSON.parse(s);
        // console.log(parse);

        const copyObg = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            copyObg[func.key] = func.functionCopy;
        }

        // copyObg[functions[0].key] = functions[0].functionCopy;
        // copyObg[functions[1].key] = functions[1].functionCopy;

        console.log(copyObg);
        return copyObg;
    }

    throw new Error('!!!!!!!');

}

const copy = copier({id: 123, name: 'dfgfdga', greeting() {console.log('hello')}, foo(){console.log('bar')}});
copy.greeting();

// #iz6emEsP2BA
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.map((course, index) => ({...course, id: index + 1})));

