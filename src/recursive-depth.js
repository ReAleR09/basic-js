module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let biggestChildDepth = 0;
        for(const i in arr) {
            const child = arr[i];
            if(Array.isArray(child)) {
                const childDepth = this.calculateDepth(child);
                if(childDepth > biggestChildDepth) {
                    biggestChildDepth = childDepth;
                }
            }
        }
        
        return biggestChildDepth + 1;
    }
};