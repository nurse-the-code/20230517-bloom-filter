// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function doAllTheThings() {
    console.log("Hi there");
    return true;
}

const hashFunction1 = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash % 43;
}

const add = (str, bitArray) => {
    const hash1 = hashFunction1(str);

    bitArray[hash1] = 1;
}

module.exports = { doAllTheThings, hashFunction1, add };
