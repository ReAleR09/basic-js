module.exports = function repeater(str, options) {
    if (options.hasOwnProperty('repeatTimes') && typeof options.repeatTimes !== 'number') {
        options.repeatTimes = 1;
    }
    if (options.hasOwnProperty('additionRepeatTimes') && typeof options.additionRepeatTimes !== 'number') {
        options.additionRepeatTimes = 1;
    }
    
    if (!options.hasOwnProperty('separator')) {
        options.separator = '+';
    }

    if (!options.hasOwnProperty('additionSeparator')) {
        options.additionSeparator = '|';
    }
    if(typeof str !== 'string') {
        str = '' + str;
    }

    let addition = '';
    if(options.hasOwnProperty('addition') && options.additionRepeatTimes) {
        addition = 
            (new Array(options.additionRepeatTimes))
                .fill('' + options.addition)
                .join(options.additionSeparator);
    }

    const result = 
        (new Array(options.repeatTimes))
        .fill(str + addition)
        .join(options.separator);

    return result;
};
  