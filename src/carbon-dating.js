const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LOG2 = 0.693;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== 'string') {
        return false;
    }

    const activity = Number.parseFloat(sampleActivity);

    if(isNaN(activity) || activity === 0.0 || activity < 0 || activity >= MODERN_ACTIVITY) {
        return false;
    }

    const activityProportion = Math.log( MODERN_ACTIVITY / activity );

    const k = LOG2 / HALF_LIFE_PERIOD;

    const t = Math.ceil(activityProportion / k);

    return t;
};
