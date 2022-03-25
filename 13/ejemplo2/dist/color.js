var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.getRandomColor = function () {
        var randomValue = function () { return Math.floor(Math.random() * 256); };
        return "rgb(".concat(randomValue(), ", ").concat(randomValue(), ", ").concat(randomValue(), ")");
    };
    return Color;
}());
export { Color };
