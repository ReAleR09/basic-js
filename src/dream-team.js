module.exports = function createDreamTeam(members) {
    if(!(members instanceof Array) || members.length === 0) {
        return false;
    }
    const result = 
        members.map((val) => {
            if(typeof val !== 'string') return '';

            return val.trim()[0].toUpperCase();
        })
        .sort((a, b) => (a < b) ? -1 : 1)
        .join('');
    
    return result;
};