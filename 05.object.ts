// 資料型別

// 1. object
// 2. array
// 3. function

// https://willh.gitbook.io/typescript-tutorial/basics/type-of-object-interfaces


// ---

// object
// 使用interface來定義物件的型別

interface Person {
    name: string;
    age: number;
    location: string;
};

let jeanine: Person = {
    name: "jeanine",
    age: 30,
    location: "Taiwan"
};

// 1. 定義介面: Person
// 2. 定義變數: jeanine
// 不允許變數被賦值的時候
// 增加或減少介面有的屬性 必須一致


// ---


// 如果希望屬性可選:

interface Person2 {
    name: string;
    age?: number;   // ?代表可有可沒有
};

let o: Person2 = {
    name: "o"
};

// 此時仍不允許任意新增屬性


// ---


// 任意屬性

interface Person3 {
    name: string;
    age?:number;
    [propKey: string]: any;  // index signature
};

/*
[propKey: string]: any;
- 字串型別的key
- 任意型別的value
*/

// 注意報錯
// 如果使用了任意屬性
// 確定屬性和可選屬性的型別都必須是它的型別的子集

// 如果任意屬性的值被定義為string
// age的型別為number 這樣就會報錯


// ---


// 唯讀屬性 readonly

interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propKey: string]: any;
};

let j: Person4 = {
    id: 1225,
    name: "J",
    gender: "female"
};

// j.id = 1;    // 會報錯
// id為readonly 不可再賦值


// ---


// array

// 1.
const list1 = [1,2,3];
// const list1: number[]
// ts自動推斷型別

// 2.
const list2: number[] = [1,2,3];
// number[]表示此陣列型別只接受數值

// 3. array generic泛型
const list3: Array<number> = [1,2,3];

// 4. interface 通常不會用這個 太複雜
interface numberArray {
    [index: number]: number;
};

const list4: numberArray = [1,2,3,4,5];


// ---


// 在function中定義物件參數型別

function scream(name: string) {
    console.log(`${name}～～～～～`);
};

const getUserInfo = (person: { name: string, age: number}) => {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
};

// 設定返回值為number
function returnNumber(): number {
    return 30;
}

/*
in js

function add(x, y) {
    return x + y;
}
*/

function add(z: number, n: number): number {
    return z + n;
}

// arrow function
let sum = (z: number, n: number): number => z + n;

// anonymous function
const names = ["a", "b", "c"];
names.forEach((name) => {
    console.log(name.toUpperCase());
});
// const names: string[]
// 自動推斷names是個字串陣列