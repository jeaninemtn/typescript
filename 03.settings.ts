// configuration

// https://www.w3schools.com/typescript/typescript_config.php


// tsconfig.json


// ---



// compilerOptions: 控制TS如何編譯檔案
// include: 資料夾/檔案須包含在編譯中
// exclude: 排除編譯

`
minimal tsconfig.json
{
    "compilerOptions": {
        "module": "nodenext",
        "target": "esnext",
    },
    "include": ["src/**/*"]
}
`

/*
啟動嚴格檢查模式
型別更嚴謹
compilerOptions: { 
    "strict": true
}
*/