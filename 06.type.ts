// ts中才有的型別

// any
// unknow
// void
// never

// https://ithelp.ithome.com.tw/articles/10271618

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


// unknow

function fna(a: any) {
    a.b();  // ok
}

function fnb(a: unknown) {
    // a.b();  // error
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