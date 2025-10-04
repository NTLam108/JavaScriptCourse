console.log("Lab 02");

console.log("======================================");

const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

const tinhTrungBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

let xepLoai = (diemTB) => {
    if (diemTB >= 9) {
        return "Xuất sắc";
    }
    else if (diemTB >= 8 && diemTB < 9) {
        return "Giỏi";
    }
    else if (diemTB >= 6.5 && diemTB < 8) {
        return "Khá";
    }
    else {
        return "Trung Bình";
    }
}

//Kết quả
console.log(`Điểm trung bình: ${tinhTrungBinh(diemToan, diemVan, diemAnh)}
Xếp loại: ${xepLoai(tinhTrungBinh(diemToan, diemVan, diemAnh))}`);

