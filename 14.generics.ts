// generics 不預先指定具體型別 使用時才指定型別

// https://www.w3schools.com/typescript/typescript_basic_generics.php

// https://medium.com/hannah-lin/typescript-generics-%E7%9A%84%E4%BD%BF%E7%94%A8%E6%83%85%E5%A2%83-f5d714ff1fcf

/*
泛型（Generics）是一種在定義函式、介面或類別時，不先確定具體的型別，而是在實際使用時，再指定型別的特性。
它的概念類似 JS 中的變數，可以使定義的 Type 更彈性並可重覆利用
*/


// ---


function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
};


createPair("Hello", 1225);
createPair(1225, 1225);
createPair("Hello", "Hello");


// ---


/*
1. generic type
2. type parameter
3. type argument
4. generic function
5. generic classes
*/

// generic type

type Identity<T> = T;

// T在賦值之前 可以是任何型別
// 賦值後的T 就成為該型別

let numberValue: Identity<number> = 1;
let stringValue: Identity<string> = "2";
let booleanValue: Identity<boolean> = true;
let arrayValue: Identity<number[]> = [1, 2, 3, 4, 5];


// ---


// generic function

function helloString(data: string): string {
    return data;
};

function helloNum(data: number): number {
    return data;
};

// 寫成共用function
function helloData<T>(data: T): T {
    return data;
};


// ---


// type argument 可以有多個參數

function call<T, K>(t: T, k: K): [K, T] {
    return [k, t];
};

const a = call("cat", 1);
console.log(a);  // [1, "cat"]

const b = call<number, string>(1, "cat");
console.log(b);  // ["cat", 1]


// ---

// 原本
type ApiResponse = {
    data: any;
    isError: boolean;
};

const response: ApiResponse = {
    data: {
        id: 1,
        username: "Jeanine",
    },
    isError: false
};


// 這樣更好
type ApiResponse1<Data> = {
    data: Data;
    isError: boolean;
};

type UserResponse = ApiResponse1<{ id: number, username: string }>;
const response1: UserResponse = {
    data: {
        id: 1,
        username: "Jeanine",
    },
    isError: false
};