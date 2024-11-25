function processInput(input) {
    // Tách chuỗi thành các phần tử riêng lẻ
    const inputArray = input.split(', ');

    // Sắp xếp các phần tử theo thứ tự bảng chữ cái
    const sortedArray = inputArray.map(item => item.toLowerCase()).sort();

    // Kết hợp các phần tử thành chuỗi mới
    const result = sortedArray.join(', ');

    return result;
}

// Ví dụ sử dụng
const input = '"eat", "tea", "tan", "ate", "nat", "bat"';
const output = processInput(input);
console.log(output);