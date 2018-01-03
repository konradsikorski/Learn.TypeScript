var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Classes;
(function (Classes) {
    var Abstract;
    (function (Abstract) {
        var AbstractClass = /** @class */ (function () {
            function AbstractClass() {
            }
            AbstractClass.prototype.standardMethod = function () {
                console.log('standard method');
            };
            return AbstractClass;
        }());
        var Implementation = /** @class */ (function (_super) {
            __extends(Implementation, _super);
            function Implementation() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(Implementation.prototype, "abstractProperty", {
                // the set property is not required
                get: function () {
                    return "abstractProperty-value";
                },
                enumerable: true,
                configurable: true
            });
            Implementation.prototype.abstractMethod = function () {
                console.log("Implemented abstract class");
            };
            return Implementation;
        }(AbstractClass));
        var ImplementationSetter = /** @class */ (function (_super) {
            __extends(ImplementationSetter, _super);
            function ImplementationSetter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImplementationSetter.prototype.abstractMethod = function () {
                throw new Error("Method not implemented.");
            };
            Object.defineProperty(ImplementationSetter.prototype, "abstractProperty", {
                get: function () {
                    return this._field;
                },
                set: function (value) {
                    this._field = value;
                },
                enumerable: true,
                configurable: true
            });
            return ImplementationSetter;
        }(AbstractClass));
        // let a = new AbstractClass(); // ERROR: cannot create instance of absract class
        var i = new Implementation();
        i.abstractMethod();
        i.standardMethod();
        console.log("i.abstratcProperty: " + i.abstractProperty);
        // i.abstractProperty = "test";
        var is = new ImplementationSetter();
        is.abstractProperty = "newValue";
        console.log("is.abstratcProperty: " + is.abstractProperty);
    })(Abstract = Classes.Abstract || (Classes.Abstract = {}));
})(Classes || (Classes = {}));
