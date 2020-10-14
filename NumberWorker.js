"use strict";
exports.__esModule = true;
var NumberWorker = /** @class */ (function () {
    function NumberWorker(number) {
        this.count = 0;
        this.count++;
        this.largestNumber = number;
        this.smallestNumber = number;
        this.averageNumber = number;
    }
    NumberWorker.prototype.setNumber = function (n) {
        var number = Number(n);
        if (number || number === 0) {
            if (this.largestNumber < number) {
                this.largestNumber = number;
            }
            if (this.smallestNumber > number) {
                this.smallestNumber = number;
            }
            this.averageNumber = (this.averageNumber * this.count + number) / (this.count + 1);
            this.count++;
        }
    };
    NumberWorker.prototype.getLargestNumber = function () {
        return this.largestNumber;
    };
    NumberWorker.prototype.getSmallestNumber = function () {
        return this.smallestNumber;
    };
    NumberWorker.prototype.getAverageNumber = function () {
        return this.averageNumber;
    };
    return NumberWorker;
}());
exports["default"] = NumberWorker;
