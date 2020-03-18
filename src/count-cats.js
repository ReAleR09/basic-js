const CAT_EARS = '^^';

module.exports = function countCats(matrix) {
    let count = 0;
    matrix.forEach(subMatrix => {
        subMatrix.forEach(el => {
            if(el === CAT_EARS) {
                count++;
            }
        })
    });

    return count;
};
