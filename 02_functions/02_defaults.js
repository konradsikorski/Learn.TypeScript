var Fynctions;
(function (Fynctions) {
    var Defaults;
    (function (Defaults) {
        function Test(firstName, age) {
            console.log("FirstName: " + firstName + ", Age: " + age);
        }
        function TestWithDefault(firstName, age) {
            if (age === void 0) { age = 18; }
            console.log("FirstName: " + firstName + ", Age: " + age);
        }
        function TestWithOptional(firstName, age) {
            console.log("FirstName: " + firstName + ", Age: " + age);
        }
        // ERROR: optional parameter must be last
        // function TestWithOptionalError(firstName?: string,  age: number ){
        // }
        function TestWithArguments(firstName) {
            var books = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                books[_i - 1] = arguments[_i];
            }
            console.log("FirstName: " + firstName + ", Books: " + books.join("; "));
        }
        // Test("Adam"); // ERROR: in JS OK but in TS it is not
        // Test("Adam", 10, "happy"); // ERROR: in JS OK but in TS it is not
        Test("Adam", 1);
        TestWithDefault("Tomek");
        TestWithDefault("Jacek", 2);
        TestWithOptional("Kacper");
        TestWithOptional("Ewa", 3);
        TestWithArguments("Ola");
        TestWithArguments("Maja", "book1", "book2");
    })(Defaults = Fynctions.Defaults || (Fynctions.Defaults = {}));
})(Fynctions || (Fynctions = {}));
