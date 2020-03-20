ACTION_DISCARD = 'discard';
ACTION_DOUBLE = 'double';

class ElementWrapper {
    constructor(el) {
        this.el = el;
        this.count = 1;
    }
}

module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw Error('Not an array');
    }

    const newArr = [];
    let discardNext = false;
    let doubleNext = false;

    for(const i in arr) {
        switch(arr[i]) {
            case '--discard-next':
                discardNext = true;
                break;
            case '--double-next':
                doubleNext = true;
                break;
            case '--discard-prev':
                if(newArr.length > 0) {
                    for(let j = newArr.length - 1; j >= 0; j--) {
                        if(newArr[j].count > 0) {
                            newArr[j].count--;
                            break;
                        }
                    }
                }
                break;
            case '--double-prev':
                if(newArr.length > 0) {
                    newArr[newArr.length-1].count++;
                }
                break;
            default:
                if(discardNext) {
                    discardNext = false;
                    const obj = new ElementWrapper(arr[i]);
                    obj.count--;
                    newArr.push(obj);
                } else if(doubleNext) {
                    doubleNext = false;
                    const obj = new ElementWrapper(arr[i]);
                    obj.count++;
                    newArr.push(obj);
                } else {
                    newArr.push(new ElementWrapper(arr[i]));
                }
        }
    }

    const result = [];
    for(let i in newArr) {
        const obj = newArr[i];
        for(let j = 0; j < obj.count; j++) {
            result.push(obj.el);
        }
    }

    return result;
};
