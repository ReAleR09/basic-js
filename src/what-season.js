module.exports = function getSeason(date) {

    if(arguments.length != 1) {
        return 'Unable to determine the time of year!';
    }
    
    if(Object.prototype.toString.call(date) !== '[object Date]') {
        throw Error('What?!');
    }
    
    const monthNum = date.getMonth() + 1;

    switch(Math.floor(monthNum / 3)) {
        case 4:
        case 0:
            return 'winter';
        case 1: 
            return 'spring';
        case 2: 
            return 'summer';
        case 3:
            return 'autumn';
    }
    
};
