var myArray = /** @class */ (function () {
    function myArray(data, length) {
        this.data = {};
        this.length = 0;
        this.data = data;
        this.length = length;
    }
    myArray.prototype.Shift = function () {
        for (var i = 0; i <= this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
    };
    myArray.prototype.UnShift = function (item) {
        for (var i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        return this.length;
    };
    myArray.prototype.pop = function () {
        delete this.data[this.length];
    };
    myArray.prototype.push = function (item) {
        // console.log(this.data, this.length);
        this.length += 1;
        this.data[this.length] = item;
        return this.length;
    };
    myArray.prototype.insert = function (item, index) {
        for (var i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
    };
    return myArray;
}());
var arr = new myArray({ 1: "1" }, 1);
arr.push(1);
console.log("length", arr.length);
console.log("data", arr.data);
console.log("arr", arr);
arr.pop();
console.log("length", arr.length);
console.log("data", arr.data);
console.log("arr", arr);
