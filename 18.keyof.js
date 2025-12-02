// keyof
// 索引型別操作
// 用來取得某個物件型別所有的屬性名稱(key)
// 回傳一個聯合型別(union)
;
function printPersonAProperty(person, properties) {
    console.log("person:" + person);
    console.log(person[properties]);
    console.log(properties);
}
;
var person = {
    name: "Alex",
    age: 32
};
printPersonAProperty(person, "name");
/*
type PersonKeys = "name" | "age" | "isStudent";
*/
