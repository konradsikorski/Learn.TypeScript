var Classes;
(function (Classes) {
    var Static;
    (function (Static) {
        var Example = /** @class */ (function () {
            function Example() {
            }
            Object.defineProperty(Example, "staticProperty", {
                get: function () {
                    return Example._fieldPrivate;
                },
                set: function (value) {
                    Example._fieldPrivate = value;
                },
                enumerable: true,
                configurable: true
            });
            Example.staticMethod = function (value) {
                return value * this.staticField * Example.staticField;
            };
            Example.prototype.method = function (value) {
                return value
                    + Example.staticField;
            };
            return Example;
        }());
        // ERROR: no static classes allowed
        //static class StaticClass{} 
        Example.staticField = 2;
        console.log("Example.staticField: " + Example.staticField);
        console.log("Example.staticMethod(3): " + Example.staticMethod(3));
        Example.staticProperty = 10;
        console.log("Example.staticProperty: " + Example.staticProperty);
        var e = new Example();
        console.log("e.method(4): " + e.method(4));
        // e.staticMethod(4); // ERROR: cannot access static member from instance
    })(Static = Classes.Static || (Classes.Static = {}));
})(Classes || (Classes = {}));
