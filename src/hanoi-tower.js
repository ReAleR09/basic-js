SECONDS_IN_HOUR = 3600;

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const requiredTurns = Math.pow(2, disksNumber) - 1;
    // time = turns / (turnsSpeed);
    // initially turnsSpess is per hour, converting to per second
    const requiredTime = requiredTurns / (turnsSpeed / SECONDS_IN_HOUR);
    return {turns: requiredTurns, seconds: requiredTime};
}