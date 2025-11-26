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
}

const person1 = new Person1("jean");
console.log(person1.getName());