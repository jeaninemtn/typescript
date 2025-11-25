// casting 類型轉換
// https://www.w3schools.com/typescript/typescript_casting.php


// ---

// casting
// Casting is the process of overriding a type.

// keyword
// 1. as
// 2. <>

let x: unknown = "Hello";
console.log((x as string).length);  // 5

let y: unknown = 25;
console.log((y as string).length);  // undefined


// ---


let s: unknown = "Hello";
console.log((<string>s).length);


// ---


// force casting

let j = "hello";
console.log(((x as unknown) as string).length);
// unknown => target type