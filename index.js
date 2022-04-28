
const returnFirstTwoDrivers = function (driverGroup) {
    return [driverGroup [0], driverGroup [1]];
};

const returnLastTwoDrivers = function (driverGroup) {
        return driverGroup.slice (-2);
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];


const createFareMultiplier = function (multiplier) {
    const makeMultiplier = function(fare) {
        return multiplier * fare;
    }
    return makeMultiplier;
};

// need help here
const fareDoubler = createFareMultiplier(2)

// need help here
const fareTripler = function (fare) {
    const createFareMultiplier =  function (fare)  {
        return fare * 3;
    };
    return createFareMultiplier;
};

const selectDifferentDrivers = function (driverArray, driverFunction) {
    return driverFunction(driverArray)
};