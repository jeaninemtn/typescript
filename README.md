# TypeScript

This repository is for practicing **TypeScript** syntax.
No complex setup—just a place to learn and experiment with TypeScript.

* [Beginner TypeScript Projects](https://www.geeksforgeeks.org/typescript/typescript-projects/)

---

## Table of Contents

* [Installing TypeScript](#installing-typescript)
* [Project Setup](#project-setup)
* [Running TypeScript](#running-typescript)
* [Example Code](#example-code)
* [Learning Resources](#learning-resources)

---

## Installing TypeScript

1. **Install Node.js** if you don’t have it yet:
   Check if Node.js and npm are installed:

```bash
node -v
npm -v
```

You should see version numbers if Node.js is installed correctly.

2. **Install TypeScript globally**:

```bash
npm install -g typescript
```

> `-g` means global installation, so you can use the `tsc` command anywhere.

3. **Check TypeScript version**:

```bash
tsc -v
```

You should see the TypeScript version, which means it's installed successfully.

---

## Project Setup

1. **Create a new folder**:

```bash
mkdir my-ts-project
cd my-ts-project
```

2. **Initialize an npm project**:

```bash
npm init -y
```

3. **Create TypeScript configuration**:

```bash
tsc --init
```

This creates a `tsconfig.json` file for TypeScript settings.

---

## Running TypeScript

1. **Create a TypeScript file**, e.g., `index.ts`:

```ts
// index.ts
const message: string = "Hello TypeScript!";
console.log(message);
```

2. **Compile TypeScript to JavaScript**:

```bash
tsc index.ts
```

This generates `index.js`, which you can run with Node.js:

```bash
node index.js
```

3. **Or run directly using ts-node** (skip compilation step):

```bash
npm install -g ts-node
ts-node index.ts
```

---

## Example Code

Here’s a simple TypeScript example:

```ts
let num: number = 10;
let str: string = "Hello";
let flag: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));
```

---

## Learning Resources

* [TypeScript Official Website](https://www.typescriptlang.org/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Beginner TypeScript Tutorial](https://ithelp.ithome.com.tw/users/20112545/ironman/2816)