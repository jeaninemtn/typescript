// eunm 列舉
// https://www.w3schools.com/typescript/typescript_enums.php
// ---
// enum
// 通常拿來定義一組不可改變的變數值
// 通常字串型或數值型
// numeric enums
// default
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
var currentDirection = CardinalDirections.North;
console.log(currentDirection); // 0
// 可以去看一下編譯成js檔後 這邊長什麼樣子
// currentDirection = "North";
// Error: "North" is not assignable to type 'CardinalDirections'.
// initialized
var CardinalDirections0;
(function (CardinalDirections0) {
    CardinalDirections0[CardinalDirections0["North"] = 1] = "North";
    CardinalDirections0[CardinalDirections0["East"] = 2] = "East";
    CardinalDirections0[CardinalDirections0["South"] = 3] = "South";
    CardinalDirections0[CardinalDirections0["West"] = 4] = "West";
})(CardinalDirections0 || (CardinalDirections0 = {}));
;
console.log(CardinalDirections0.North); // 1
console.log(CardinalDirections0.West); // 4
// fully initialized
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
;
console.log(StatusCode.NotFound); // 404
console.log(StatusCode.Success); // 200
// ---
// string enums
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1["North"] = "North";
    CardinalDirections1["East"] = "East";
    CardinalDirections1["South"] = "South";
    CardinalDirections1["West"] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
console.log(CardinalDirections1.North); // "North"
