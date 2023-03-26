// 1. Работа с простыми типами
// Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

type ConcatFunc = (a: string, b: string) => string;

// 2. Работа с интерфейсами
// Напишите интерфейс для описания следующих данных

interface IData {
    howIDoIt: string;
    simeArray: (string | number)[];
}

interface IMyHometask extends IData {
    withData: IData[];
}

const MyHometask: IMyHometask  = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3. Типизация функций, используя Generic
// В уроке про Generics мы написали интерфейс массива MyArray
// interface MyArray<T> {
//   [N: number]: T;  
//  добавьте типизацию для метода reduce
//     reduce();
// }
// Справка о работе reduce
// const initialValue = 0;
// [1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
// Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator. 
// На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива

interface MyArray<T> {
    [N: number]: T;
    reduce(callback: (accumulator: T, value: T) => T, initialValue?: T): T;
    reduce<U>(callback: (accumulator: U, value: T) => U, initialValue?: U):  U;
}

const myArray: MyArray<number> = [1,2];
myArray.reduce((a, b) => a + b, 0);
myArray.reduce<string>((a, b) => a + b, '');

// 4. Работа с MappedTypes
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}



