// generics

// https://www.w3schools.com/typescript/typescript_basic_generics.php


// ---


function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
};


createPair("Hello", 1225);
createPair(1225, 1225);
createPair("Hello", "Hello");