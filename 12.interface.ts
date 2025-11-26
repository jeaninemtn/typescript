// interface

// 跟type用法相似 但interface只用在物件上

// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php


// ---

interface Person {
    name: string;
    age: number;
    gender?: string; // 可選屬性
};

const jeanine: Person = {
    name: "Jeanine",
    age: 30
};

const oz: Person = {
    name: "Oz",
    age: 27  
    // 缺少gender也不會報錯
};

/*

// property多或少都不可以

const j: Person = {
    name: "J",  // error
};

Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.ts(2741)

*/


// ---


// readonly

interface Device {
    readonly id: number;    // 唯讀
    name: string;
};

const phone: Device = {
    id: 12,  // 賦值 
    name: "25"
};

// 不可更改值
// phone.id = 13;  // error xxx


// ---


// interface merging

// interface可以重複定義 ts會將全部合併

interface Animal { name: string; } interface Animal { sound: string; };

const dog: Animal = {
    name: "Doggy",
    sound: "woof"
};


// extending interface

interface Rectangle {
    width: number;
    height: number;
};

interface ColorRectangle extends Rectangle {
    color: string;
};

const colorRectangle: ColorRectangle = {
    width: 100,
    height: 150,
    color: "purple"
};