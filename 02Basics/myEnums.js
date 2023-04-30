// An enum is a special "class" that represents a group
// of constants (unchangeable variables).(when u try to restrict someones choice)
// Enums come in two flavors string and numeric
var seatChoice;
(function (seatChoice) {
    seatChoice[seatChoice["AISLE"] = 0] = "AISLE";
    seatChoice[seatChoice["MIDDLE"] = 1] = "MIDDLE";
    seatChoice[seatChoice["WINDOW"] = 2] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 3] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var hcSeat = seatChoice.AISLE;
