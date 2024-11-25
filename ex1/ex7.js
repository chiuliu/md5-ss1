const objects = (...objects) => {
    return Object.assign({}, ...objects);
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 }
const objectTest = objects(obj1, obj2, obj3);
console.log(objectTest);
