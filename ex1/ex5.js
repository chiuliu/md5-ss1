// Hàm sử dụng toán tử rest
const printArguments = (...args) => {
    console.log("Các đối số được truyền vào:");
    args.forEach(arg => {
        console.log(arg);
    });
};

// Ví dụ gọi hàm với số lượng đối số khác nhau
printArguments(1, 'hello', true, { name: 'Alice' }, [1, 2, 3]);
printArguments('JavaScript', 'is', 'fun');