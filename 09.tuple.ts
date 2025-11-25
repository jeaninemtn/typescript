// tuple 元組
// https://www.w3schools.com/typescript/typescript_tuples.php

/*
- 當位置有意義時
- 當需要回傳多個不同型別的值
- 資料解析(csv等等)
*/


// ---

// tuple是一個已經預先定義好長度與每個元素型別的物件
// 也就是每一個位置(index)都可以有不同的型別

let theTuple: [number, boolean, string];
theTuple = [5, true, "no"];

let user: [string, number] = ["Jeanine", 30];

// theTuple = ["no", true, 5];  // error xxx wrong order


// ---


function getUser(): [string, number] {
    return ["Jeanine", 30];
}


const [name, age] = getUser();


// ---


type point = [number, number];
const p: point = [12, 25];


// ---


type event = [string, Date];
const e:event = ["click", new Date()];


// ---


// 1. tuple可以使用push 但是不建議
// 雖然不會破壞前面預先定義好的兩個位置 但會破壞長度

let t: [string, number] = ["isCat", 1];
t.push(12);

// 2. 如果有多個optional容易變得複雜
// 長度不再固定

type example = [string, number?];