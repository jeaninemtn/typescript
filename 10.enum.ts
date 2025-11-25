// eunm 列舉
// https://www.w3schools.com/typescript/typescript_enums.php


// ---

// enum
// 通常拿來定義一組不可改變的變數值
// 通常字串型或數值型

// numeric enums

// default

enum CardinalDirections {
    North,
    East,
    South,
    West
};

let currentDirection = CardinalDirections.North;
console.log(currentDirection);  // 0

// 可以去看一下編譯成js檔後 這邊長什麼樣子

// currentDirection = "North";
// Error: "North" is not assignable to type 'CardinalDirections'.


// initialized

enum CardinalDirections0 {
    North = 1,
    East,
    South,
    West
};

console.log(CardinalDirections0.North); // 1
console.log(CardinalDirections0.West);  // 4

// fully initialized

enum StatusCode {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

console.log(StatusCode.NotFound);   // 404
console.log(StatusCode.Success);    // 200


// ---


// string enums

enum CardinalDirections1 {
    North = "North",
    East  = "East",
    South = "South",
    West  = "West",
}

console.log(CardinalDirections1.North);  // North