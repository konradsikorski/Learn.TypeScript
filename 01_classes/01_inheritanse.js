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
    var Inheritance;
    (function (Inheritance) {
        var Base = /** @class */ (function () {
            function Base(privateValue) {
                this._protected = 'base-protected';
                this._public = 'bas-public';
                this._private = privateValue;
            }
            Base.prototype.toString = function () {
                return "Base.ToString() > _private: " + this._private + ", _protected: " + this._protected + ", _public: " + this._public;
            };
            Base.prototype.getProtected = function () {
                return this._protected;
            };
            return Base;
        }());
        var Derived1 = /** @class */ (function (_super) {
            __extends(Derived1, _super);
            function Derived1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Derived1.prototype.setProtected = function (value) {
                this._protected = value;
            };
            // ERROR: duplicate method
            // setProtected(value: string, ohterValue: string){
            //     this._protected = value;
            // }
            Derived1.prototype.getPrivate = function () {
                // return this._private; // ERROR: cannot acces private variable
            };
            return Derived1;
        }(Base));
        var Derived2 = /** @class */ (function (_super) {
            __extends(Derived2, _super);
            function Derived2(privateValue, protectedValue) {
                var _this = 
                //this._public = 'D2-public'; // ERROR: cannot use this before super()
                _super.call(this, privateValue) || this;
                _this._public = "D2-public";
                _this._protected = protectedValue;
                return _this;
            }
            Derived2.prototype.toString = function () {
                var response = _super.prototype.toString.call(this);
                return "D2.ToString() > " + response;
            };
            return Derived2;
        }(Base));
        console.log('=== D1 ===');
        var d1 = new Derived1("Derived1");
        d1.setProtected("d1-protected");
        // console.log(d1._private); // ERROR: cannot access private variable
        // console.log(d1._protected); //ERROR: cannot access protected variable
        console.log('d1.public: ' + d1._public);
        console.log("d1.getProtected > " + d1.getProtected());
        console.log("d1.tostrig() > " + d1.toString());
        console.log('=== D2 ===');
        var d2 = new Derived2("d2-private", "d2-protected");
        console.log('d2.public: ' + d2._public);
        console.log("d2.getProtected > " + d2.getProtected());
        console.log("d2.tostrig() > " + d2.toString());
    })(Inheritance = Classes.Inheritance || (Classes.Inheritance = {}));
})(Classes || (Classes = {}));
