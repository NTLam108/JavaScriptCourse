console.log("Video33");

console.log("==========================================");

let globalVar = "Tôi là biến toàn cục";
function show() {
    console.log(globalVar); // Truy cập được 
}
show();
console.log(globalVar); // Truy cập được


function sayHi() {
    let name1 = "LamVoii";
    console.log("Hi " + name1);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được 
    }
    console.log(x); // ❌ Lỗi: x is not defined
}
sayHi();
console.log(name1); //Lỗi: name is not definded