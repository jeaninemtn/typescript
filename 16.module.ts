// module 模組

// https://www.typescriptlang.org/docs/handbook/2/modules.html
// https://blog.darkthread.net/blog/typescript-module-practice/

// 語法

// 1. ES6 module syntax (ESM)
// import
// export

// 2. CommonJS(CJS)
// require
// module.exports


/*
1. 程式碼中只要出現import或export 一律被視為module (反之為script)
2. module中的程式碼只能在該檔案中使用 除非使用了export
3. TS沒有自己的module系統 是根據tsconfig中的設定 把TS編譯成JS的模組格式
4. verbatimModuleSyntax強制必須寫乾淨的ESM語法
*/


// ---


// ES6

// export const a = 1;

// import { a } from "./16.module";

// ---

// ESM

// export function sum(a:number, b:number) {
//     return a + b;
// };

// export default function hello() {
//     console.log("Hello");
// };

// 在其他檔案引入
// import { sum } from "./16.module";
// import hello from "./16.module";
// import hello, { sum } from "./16.module";

/*
error
A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled.
*/

// tsconfig.json
// verbatimModuleSyntax: true
// TS不會再幫忙修改、自動修正import/export
// 也就是TS不會把ESM轉成CJS的模組語法

// export方式不同:
// 1. default export 預設匯出
// 2. named export 具名匯出

/* 
`./utils.js`
export default function hello() {}
一個模組只能有一個default

import hello from "./utils.js";
import banana from "./utils.js";
都可以 因為default export不看名字
*/

/* 
named export 匯出時名字是固定的 所以import時要用{}指定名稱

`./utils.js`
export function add(a:number, b:number): number {
    return a + b;
};

export const pi = 3.14;

import { add, pi } form "./utils.js";
*/


/* 
可以這樣寫在一起
import hello, { add, pi } form "./utils.js";
*/


// ---


// CommonJS
// module.exports = { ... }

// import func = require("func");
// const code = func.readFileSync("module.ts", "utf8");

function absolute(num: number) {
    if (num < 0) return num * -1;
    return num;
};

// module.exports = {
//     pi: 3.14,
//     squareTwo: 1.41,
//     phi: 1.61,
//     absolute
// };

// ---


export type Cat = { name: string, age: number };
export interface Dog {
    name: string;
    age: number;
};

// 在其他檔案中引入時 使用import
// import { Cat, Dog } from "./16.module";
type Animals = Cat | Dog;