var Functions;
(function (Functions) {
    var Overloads;
    (function (Overloads) {
        function getValue(x) {
            if (typeof x == "string") {
                return "same string";
            }
            else if (typeof x == "number") {
                return 10;
            }
            return {};
        }
        function getValueVersion2(x) {
            if (typeof x == "string") {
                return "same string";
            }
            else if (typeof x == "number") {
                return 10;
            }
            // return {} // ERROR: can only return string or number
            return undefined;
        }
        console.log("for string: " + getValue("string"));
        console.log("for number: " + getValue(1));
        //console.log("for object: " + getValue({})); // ERROR: cannot add object
        console.log("for string: " + getValueVersion2("string"));
        console.log("for number: " + getValueVersion2(1));
    })(Overloads = Functions.Overloads || (Functions.Overloads = {}));
})(Functions || (Functions = {}));
