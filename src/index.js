module.exports = function zeros(expression) {
    let arr = expression.split('*');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = factorial(arr[i]);
    }
    const str = arr.join('*');
    let newArr = str.split('*');
    let twoN = 0;
    let fiveN = 0;
    for (let i = 0; i < newArr.length; i++) {
        twoN += factorization(newArr[i], 2);
        fiveN += factorization(newArr[i], 5);

    }
    return Math.min(twoN, fiveN);
}

function factorial(expression) {
    let arr = [];
    if (expression.endsWith('!!')) {
        const num = parseInt(expression.slice(0, -2), 10);
        for (let i = num; i > 0; i -= 2) {
            arr.push(i);
        }
    } else {
        if (expression.endsWith('!')) {
            const num = parseInt(expression.slice(0, -1), 10);
            for (let i = num; i > 0; i--) {
                arr.push(i);
            }
        } else return "";
    }
    return arr.join('*');
}

function factorization(x, y, num = 0) {
    if (x % y == 0) {
        num++;
        return factorization(x / y, y, num);
    }
    return num;
}