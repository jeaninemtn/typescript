// module 模組

// 1. ES6 module syntax (ESM)
// import
// export


// 2. CommonJS(CJS)
// require
// module.exports


// ---

// ES6

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

// CommonJS
// module.exports = { ... }