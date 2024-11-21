const number = 5;
const arr = [1,2,3];

try {
    number = 6;
} catch (error) {
    console.log(" lỗi, const là hằng số");
     }
arr.push=[4];
console.log("Number : ", number);
console.log("Arr : ", arr);
