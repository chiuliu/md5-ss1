// Xây dựng hàm có 3 tham số đầu vào là 2 mảng và 1 giá trị số.
// Hàm sẽ kết hợp các phần tử của 2 mảng đầu vào và chèn giá trị số vào vị trí tương ứng.
// Nếu vị trí chèn không hợp lệ thì thông báo lên màn hình.

function mergeArray(...inputs) {
    if (inputs.length !== 3 || !Array.isArray(inputs[0]) || !Array.isArray(inputs[1]) || typeof inputs[2] !== 'number') {
        console.log("Đầu vào không hợp lệ");

        return;
    }


    const mergeArray = [...inputs[0], ...inputs[1]];

    const insertIndex = inputs[2];
    if (insertIndex < 0 || insertIndex > mergeArray.length) {
        console.log("Vị trí chèn không hợp lệ");
        return;
    }

    mergeArray.splice(insertIndex, 0, inputs[2]);
    // vị trí bắt đầu, số phần tử cần xoá, vị trí chèn
    return mergeArray;
}
