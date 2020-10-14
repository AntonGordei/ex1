"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var NumberWorker_1 = require("./NumberWorker");
var readline = require("readline");
var numberWorker;
var readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var askQuestion = function (question, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        return readlineInterface.question(question, resolve);
                    })];
                case 1:
                    answer = _a.sent();
                    if (!answer) {
                        return [2 /*return*/, defaultValue];
                    }
                    return [2 /*return*/, answer];
            }
        });
    });
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, number;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askQuestion("\"start\" - run\n")];
            case 1:
                res = _a.sent();
                if (!(res === 'start')) return [3 /*break*/, 5];
                _a.label = 2;
            case 2:
                if (!true) return [3 /*break*/, 4];
                return [4 /*yield*/, askQuestion('enter a number or "exit" >> ')];
            case 3:
                res = _a.sent();
                if (res === 'exit') {
                    return [3 /*break*/, 4];
                }
                number = Number(res);
                if (number || number === 0) {
                    if (!numberWorker) {
                        numberWorker = new NumberWorker_1["default"](number);
                    }
                    else {
                        numberWorker.setNumber(number);
                    }
                }
                return [3 /*break*/, 2];
            case 4:
                console.log("\n        1) smallest number = " + numberWorker.getSmallestNumber() + "\n        2) largest number = " + numberWorker.getLargestNumber() + "\n        3) average of all numbers = " + numberWorker.getAverageNumber() + "\n        ");
                return [3 /*break*/, 6];
            case 5:
                console.log('Restart script and enter "start"!');
                _a.label = 6;
            case 6:
                readlineInterface.close();
                return [2 /*return*/];
        }
    });
}); })();
