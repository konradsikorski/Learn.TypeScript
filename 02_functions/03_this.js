var Functions;
(function (Functions) {
    var This;
    (function (This) {
        var person = {
            name: "Konrad",
            getNameBuilder: function () {
                // ERROR: the 'this' will refere to window nat the object and TS will 
                return function () {
                    //@ts-ignore - this is required becouse TS will not allow to compile becouse this is of type any
                    return "getNameBuilder: " + this.name; // + this.name;
                };
            },
            getNameBuilderArrow: function () {
                var _this = this;
                // the arrow function will change the behavior ant set the 'this' to the object
                return function () {
                    return "getNameBuilderArrow: " + _this.name;
                };
            }
        };
        var nameBuilder = person.getNameBuilder();
        console.log("old: " + nameBuilder());
        var nameBuilderArrow = person.getNameBuilderArrow();
        console.log("arrow: " + nameBuilderArrow());
        var Handler = /** @class */ (function () {
            function Handler() {
                var _this = this;
                this.onClickGoodArrow = function (e) {
                    _this.timestamp = e.timeStamp;
                    console.log('clicked!: ' + _this.timestamp);
                };
            }
            Handler.prototype.onClickBad = function (e) {
                this.timestamp = e.timeStamp;
                console.log('clicked!: ' + this.timestamp);
            };
            Handler.prototype.onClickGood = function (e) {
                // this.timestamp = e.timeStamp; // ERROR: can't use this here because it's of type void
                console.log('clicked!');
            };
            return Handler;
        }());
        var uiElement = {
            addClickListener: function (onclick) {
                onclick({
                    timeStamp: 10
                });
            }
        };
        var h = new Handler();
        // uiElement.addClickListener(h.onClickBad); // ERROR: onClickBad expect 'this' to be Handler but UIElement expect void 
        uiElement.addClickListener(h.onClickGood);
        uiElement.addClickListener(h.onClickGoodArrow);
    })(This = Functions.This || (Functions.This = {}));
})(Functions || (Functions = {}));
