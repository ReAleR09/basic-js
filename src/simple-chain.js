const chainMaker = {
  _chainArr: [],

  getLength() {
    return this._chainArr.length;
  },
  addLink(value) {
    this._chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position < 1 || position > this._chainArr.length) {
      this._chainArr = [];
      throw Error('Position out of bounds');
    }
    this._chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this._chainArr = this._chainArr.reverse();
    return this;
  },
  finishChain() {
    const chain = 
      this._chainArr
        .map(function (val) {
          if(val === undefined) {
            return '( )';
          }
          return '( ' + val + ' )';
        })
        .join('~~');
    this._chainArr = [];
    return chain;
  }
};

module.exports = chainMaker;
