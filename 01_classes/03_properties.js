var Classes;
(function (Classes) {
    var Properties;
    (function (Properties) {
        var Example = /** @class */ (function () {
            function Example() {
            }
            Object.defineProperty(Example.prototype, "field", {
                get: function () {
                    return this._field;
                },
                set: function (value /*type must be the same as type of _field*/) {
                    if (value !== "error") {
                        this._field = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Example.prototype, "sameField", {
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            return Example;
        }());
        var e = new Example();
        e.field = "field-value";
        console.log("e.field: " + e.field);
        e.field = "error";
        console.log("e.field: " + e.field);
        e.sameField = "error";
        console.log("e.field: " + e.field);
    })(Properties = Classes.Properties || (Classes.Properties = {}));
})(Classes || (Classes = {}));
