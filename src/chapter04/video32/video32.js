console.log("Video32");

console.log("=========================================");

const sum = (a, b, c) => {
    if (typeof (a) !== 'number') {
        console.log("run before");
        return;  //thoát ra ngay lập tức => giống break trong vòng lặp
    }
    console.log("run after");
    return a + b + c;
}

console.log(sum(1, 2, 3));
console.log(sum("hello", 1, 2));  // return; => undefinded