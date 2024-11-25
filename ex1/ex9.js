function mergeAndInsert(...inputs) {
    // Kiểm tra đầu vào
    if (inputs.length !== 3 || !Array.isArray(inputs[0]) || !Array.isArray(inputs[1]) || typeof inputs[2] !== 'number' || inputs[2] < 0 || inputs[2] > inputs[0].length + inputs[1].length) {
        console.log('Đầu vào không hợp lệ!');
        return;
    }

    // Gộp 2 mảng đầu vào
    const mergedArray = [...inputs[0], ...inputs[1]];

    // Chèn giá trị số vào vị trí tương ứng
    mergedArray.splice(inputs[2], 0, ...inputs[1]);

    // Thay thế các giá trị boolean thành 'true' và 'false'
    const result = mergedArray.map(item => {
        if (typeof item === 'boolean') {
            return item.toString();
        }
        return item;
    });

    return result;
}