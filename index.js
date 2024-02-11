const returnFirstTwoDrivers = function (driversArray) {
    return driversArray.slice(0, 2);
};

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnLastTwoDrivers = function (driversArray) {
    return driversArray.slice(2, 4);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
function fareDoubler(fare) {
    return fare * 2;
  }
function fareTripler(fare){
    return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, functionToApply) {
    if (functionToApply === returnFirstTwoDrivers) {
      return arrayOfDrivers.slice(0, 2);
    } else if (functionToApply === returnLastTwoDrivers) {
      return arrayOfDrivers.slice(-2);
    }
  }