// class

// https://www.w3schools.com/typescript/typescript_classes.php


// ---


class Person {
    // name: string;   // 這樣會報錯
    name: string | undefined;
};

const person = new Person();
person.name = "Jeanine";


// ---

// visibility

/*
1. public
2. private
3. protected
*/

class Person1 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
};

const person1 = new Person1("jean");
console.log(person1.getName());


// ---

// T for TYPE

class NamedValue<T> {
    // 私有變數
    private _value: T | undefined;

    constructor(private name: string) {};

    /* 
    1. constructor 原本就是公有變數性質(pucblic)

    2. 上面這句寫法等同於:

    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    */

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`
    }
};

let value = new NamedValue<number>("myNumber");
value.setValue(10);
// value.setValue("10");    // error xxx not number

console.log(value.toString());
// myNumber: 10