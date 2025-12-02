// utility
// https://www.w3schools.com/typescript/typescript_utility_types.php


// ---

// 1. Partial
// 讓物件內中的property全部變成optional

interface Point {
    x: number;
    y: number;
};

let pointPart: Partial<Point> = {};
pointPart.x = 10;


// 2. Required
// 讓物件中的property全部變成required

interface Car {
    brand: string;
    model: string;
    year?: number;
};

let myCar: Required<Car> = {
    brand: "Toyota",
    model: "Crown Crossover",
    year: 2025  // 變成必填屬性了
};


// 3. Record
// Record<string, number> is equivalent to { [key: string]: number }

const nameAgeMap: Record<string, number> = {
    "Alex": 32,
    "Doggy": 32
};


// 4. Omit
// 從物件中移除某個特定的property

// Omit<原始型別, 要移除的屬性>

// 用union的方式放置多個要移除的屬性: 
// Omit<原始型別, 要移除的屬性 | 要移除的屬性 | 要移除的屬性>

interface Person {
    name: string;
    age: number;
    city?: string;
};

const jeanine: Omit<Person, "age" | "city"> = {
    name: "Jeanine",
    // `Omit` has removed age and city from the type and they can't be defined here
};


// 5. Pick
// 從物件中移除所有property只保留指定項目

const alex: Pick<Person, "name"> = {
    name: "Alex",
    // `Pick` 只保留了name這個property
};


// 6. Exclude
// 用來移除union中的型別

// Exclude<T, U>
// 從聯合型別T中移除U這個型別

type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // value不可以是string 只可以是number|boolean


// 7. ReturnType

// Return<T>
// 取得某個函式型別T的回傳型別

// 常用情境
// 1. 取得某個函式的回傳型別 避免重複定義
// 2. 取得箭頭函式的回傳型別

type PointGenerator = () => {
    x: number;
    y: number;
};

const point: ReturnType<PointGenerator> = {
    x: 10, y: 10,
};


// ---

function getUser() {
    return {
        id: 1,
        name: "Z"
    };
}

type User = ReturnType<typeof getUser>;

/* 
User = {
    id: number;
    name: string;
};
*/


// 8. Parameters

// Parameters<T>
// 取得某個函式型別T的所有參數型別 (以tuple形式回傳)

// 使用情境:
// 1. 建立wrapper function
// 2. 取得函式參數型別 用於API Schema

function sum(a: number, b: number): number {
    return a + b;
};

type sumParams = Parameters<typeof sum>;

/* 
[number, number];
*/


// ---

type PointPrinter = (p: { x: number; y: number; }) => void;

const pointa: Parameters<PointPrinter> = [{ x: 1, y: 2 }];
const pointb: Parameters<PointPrinter>[0] = {
    x: 10,
    y: 20
};


// ---

function fetchUser(id: number, email: string, hasPost: boolean) {
    return { id, hasPost };
};

function log(...args: Parameters<typeof fetchUser>) {
    // Parameters<typeof fetchUser>
    // [number, string, boolean];
    return fetchUser(...args);
};


// 9. Readonly

interface PersonA {
    name: string;
    age: number;
};

const persona: Readonly<PersonA> = {
    name: "Luffy",
    age: 17
};

// persona.name = "Lucky";  // error xxx Readonly 不可重新賦值