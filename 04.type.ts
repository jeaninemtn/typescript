// 資料型別
// https://willh.gitbook.io/typescript-tutorial/basics/primitive-data-types

// 原始資料型別 primitive

let isPerson: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let notNumber: number = NaN;
let infinityNumber: number = Infinity;

let name: string = "Jeanine";
let sentence: string = `My name is ${name}`;

// void表示沒有返回任何值
function returnVoid(): void {
    alert("void");
};

let unusable1: void = undefined;
// let unusable2: void = null;  // strict模式下會報錯...

let u: undefined = undefined;
let n: null = null;

// 可以這樣寫 不會報錯 (但通常不會這樣寫)
// strict模式下會報錯...
/*
let num: number = undefined;
let numu: undefined;
let numuu: number = numu;
*/


// ---

// type inference
// type annotation
// type assertions

// https://ithelp.ithome.com.tw/articles/10263795
// https://www.w3schools.com/typescript/typescript_explicit_inference.php

// ---

// inference
// 沒有明確指定型別 ts會依照型別的規則去推斷型別

let x = 3;
// x = "hello";    
// error: Type 'string' is not assignable to type 'number'
// let x:number

// https://willh.gitbook.io/typescript-tutorial/basics/type-inference

// ---

// annotation
// 型別註記

let age: number = 20;
let animal: string = "cat";
let isTrue: boolean = true;

// ---

// assertion
// 可推翻ts的推斷 
// 新增屬性 使用斷言指定型別

interface User {
    name: string;
    age: number;
}

// 1. as 用法
const user1 = {} as User;
user1.name = "Jeanine";
user1.age = 30;

const user3 = {
    name: "Ning",
    age: 30
} as User;

// tsx語法需使用as 不可以使用下面那種

// 2. <型別>值
const user2 = <User>{
    name: "Jean",
    age: 30
};

// assertion要小心使用

// https://willh.gitbook.io/typescript-tutorial/basics/type-assertion


// ---


// casting
// https://www.w3schools.com/typescript/typescript_casting.php