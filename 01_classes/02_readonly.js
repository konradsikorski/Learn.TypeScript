var Classes;
(function (Classes) {
    var ReadonlyExample;
    (function (ReadonlyExample_1) {
        var ReadonlyExample = /** @class */ (function () {
            function ReadonlyExample(value, 
                // if you specify parameter as 'readonly', then new readonly class variable will be created
                _publicReadonly, 
                // this will create protected variable for this class
                _protectedReadonly, 
                // if you specify acesor type (public, private, protected) it will create a class variable too
                _public) {
                this._publicReadonly = _publicReadonly;
                this._protectedReadonly = _protectedReadonly;
                this._public = _public;
                this._readonly = value;
            }
            ReadonlyExample.prototype.setReadonly = function (value) {
                // this._readonly = value; // ERROR: cannot set readonly
            };
            ReadonlyExample.prototype.getProtectedReadonly = function () {
                return this._protectedReadonly;
            };
            return ReadonlyExample;
        }());
        var re1 = new ReadonlyExample("readonly-value", "publicReadonly-value", "protectedReadonly-value", "public-value");
        // re1._readonly = "value"; // ERROR: cannot change readonly
        console.log('re1._readonly: ' + re1._readonly);
        console.log('re1._publicReadonly: ' + re1._publicReadonly);
        console.log('re1.getProtectedReadonly(): ' + re1.getProtectedReadonly());
        console.log('re1._public: ' + re1._public);
    })(ReadonlyExample = Classes.ReadonlyExample || (Classes.ReadonlyExample = {}));
})(Classes || (Classes = {}));
