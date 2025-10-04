console.log(`
Video39
===========================================================
`);

const myClass = ["Tho", "Voi", "Tom", "Soc", "Sau"];

console.log(myClass, myClass.length);

//duyệt bằng for()
for (let i = 0; i < myClass.length; i++) {
    console.log(`Phần tử thứ ${i}: ${myClass[i]}`);
}
console.log("===========================================================");
//duyệt bằng forEach(value: String, index: number, array: string[])  Note: array: string[] => ít dùng
myClass.forEach(function (value, index) {
    console.log(`Phần tử thứ ${index}: ${value}`);
});
console.log("===========================================================");
myClass.forEach((value, index) => {
    console.log("Phần tử thứ " + index + ": " + value);
});