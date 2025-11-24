// 聯合型別 union type

// https://willh.gitbook.io/typescript-tutorial/basics/union-types


// ---


// 表示取值可以為多種型別中的一種

let myNum: string | number;

myNum = "seven";
myNum = 7;

// error: myNum = true; xxxxxxxx

// function getLength(s: string | number): number {
//     return s.length;
// }

/*
error TS2339: 
Property 'length' does not exist on type 'string | number'.
Property 'length' does not exist on type 'number'.
*/


function getString(s: string | number): string {
    return s.toString();
}


// ---


// 使用typeof確認型別

function printa(x: string | number): void {
    if (typeof x === "string") {
        console.log(x.toLowerCase());        
    } else {
        console.log(x);
    }
}

// Array.isArray(param) 檢查傳入值是不是array
function printb(x: string[] | string): void {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join( " and "));        
    } else {
        console.log("Hello " + x);
    }
}