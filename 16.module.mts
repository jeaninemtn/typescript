// 如果要使用esm寫法
// 把檔名改成.mts

export function hello() {
    console.log("hello");
};

export default function add(a: number, b: number): number {
    return a + b;
};

/*
import add, { hello } from "path of this file";
*/