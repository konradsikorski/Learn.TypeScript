var Functions;
(function (Functions) {
    var Types;
    (function (Types) {
        var functionVariable;
        functionVariable = function (x, y) {
            return x + y;
        };
        console.log(functionVariable(1, 2));
    })(Types = Functions.Types || (Functions.Types = {}));
})(Functions || (Functions = {}));
