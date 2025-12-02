// type alias

// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php


// ---

type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
};


// ---

const carYear: CarYear = 2024;
const carType: CarType = "Toyota";
const carModel: CarModel = "Crown";

const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};


// ---

// intersection

type Animal = {
    name: string;
};

type Bear = Animal & { honey: boolean };  // 合併屬性
const bear: Bear = {
    name: "Winnie",
    honey: true
};

// union

type Status = "success" | "error";  // 定義了一種型別 值只能是兩種字串
let response: Status = "success";


// ---


type WrappedValue<T> = { value: T };
const wrappedNumber: WrappedValue<number> = { value: 10 };
const wrappedString: WrappedValue<string> = { value: "10" };