// ts中才有的型別

// any
// unknown
// void
// never

// https://ithelp.ithome.com.tw/articles/10271618

// https://www.w3schools.com/typescript/typescript_special_types.php

// ---


// any 允許任何型別
let num: any = "seven";
num = 7;

let anything;   // 沒指定 也是被當成any
anything = 7;
anything = "seven";

/*
function fn(x) {    // 沒指定 是any
    console.log(x);    
}
// strict模式下會報錯
*/


// ---


// unknown
// 比起any 更安全的一種型別

function fna(a: any) {
    a.b();  // ok
}

function fnb(a: unknown) {
    // a.b();  // error
    // a is of type 'unknown'
}

// 使用unknown的變數之前 先寫好不同類型做不同事
function processValue(value: unknown) {
    if (typeof value === "string") {    // narrowing
        // value is treated as string
        console.log(value.toUpperCase());
    } else if (Array.isArray(value)) {
        // value is treated as array
        console.log(value.length);
    }
}


// ---


// void 無返回值

function alertOAO(): void {
    alert("OAO");
}


// ---


// never 錯誤處理

function displayError(msg: string): never {
    throw new Error(msg);
} 