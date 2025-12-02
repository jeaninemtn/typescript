// keyof
// 索引型別操作
// 用來取得某個物件型別所有的屬性名稱(key)
// 回傳一個聯合型別(union)

// keyof Type

// https://www.w3schools.com/typescript/typescript_keyof.php


// --- 

interface PersonA {
    name: string;
    age: number;
};

function printPersonAProperty(person: PersonA, properties: keyof PersonA): void {
    console.log("person:" + person);    // [Object, Object]
    console.log(person[properties]);    // Alex
    console.log(properties);            // name
};

let person = {
    name: "Alex",
    age: 32
};
printPersonAProperty(person, "name");

// ---

type PersonB = {
    name: string;
    age: number;
    isStudent: boolean;
};

type PersonKeys = keyof PersonB;

/*
type PersonKeys = "name" | "age" | "isStudent"; 
*/