console.log("video38");
console.log("========================================")


//Truy cập phần tử trong mảng
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//chỉnh sửa phần tử trong mảng
colors[0] = "yellow";
colors[2] = "orange"
for (let k = 0; k < colors.length; k++) {
    console.log(colors[k]);
}

//thêm phần tử
//thêm vào cuối mảng với push()
colors.push("black");
console.log(colors);
//thêm vào đầu mảng với unshift()
colors.unshift("white");
console.log(colors);

//xóa phần tử
//xóa cuối mảng với pop()
colors.pop();
console.log(colors);
//xóa phần tử đầu mảng với shift()
colors.shift();
console.log(colors);