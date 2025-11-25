// 交集型別 intersection type

// https://ithelp.ithome.com.tw/articles/10271768


// ---


// & 須同時符合兩種型別
interface Colorful {
    color: string;   
};

interface Circle {
    radius: number;
};

type ColorfulCircle = Colorful & Circle;

function draw(pattern: ColorfulCircle): void {
    console.log(`Color: ${pattern.color}`);
    console.log(`Radius: ${pattern.radius}`);
};

draw({ color: "purple", radius: 50 });      // ok
// draw({ color: "green", radiusss: 50 });  // error xxx



