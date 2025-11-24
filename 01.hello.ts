// https://willh.gitbook.io/typescript-tutorial/introduction/hello-typescript

function exportHello(person: string) {
    return "Hello " + person;
}

let user = "Jeanine";

console.log(exportHello(user));

// 編譯
// tsc 01.hello.ts
// found a new file: 01.hello.js

// 執行
// node 01.hello.js
// Hello Jeanine