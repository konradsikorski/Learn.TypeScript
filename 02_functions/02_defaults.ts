namespace Fynctions.Defaults{
    function Test(firstName: string,  age: number ){
        console.log(`FirstName: ${firstName}, Age: ${age}`);
    }

    function TestWithDefault(firstName: string,  age: number = 18 ){
        console.log(`FirstName: ${firstName}, Age: ${age}`);
    }

    function TestWithOptional(firstName: string,  age?: number ){
        console.log(`FirstName: ${firstName}, Age: ${age}`);
    }

    // ERROR: optional parameter must be last
    // function TestWithOptionalError(firstName?: string,  age: number ){
    // }

    function TestWithArguments(firstName: string,  ...books: string[] ){
        console.log(`FirstName: ${firstName}, Books: ${books.join("; ")}`);
    }

    // Test("Adam"); // ERROR: in JS OK but in TS it is not
    // Test("Adam", 10, "happy"); // ERROR: in JS OK but in TS it is not
    Test("Adam", 1);
    TestWithDefault("Tomek");
    TestWithDefault("Jacek", 2);
    TestWithOptional("Kacper");
    TestWithOptional("Ewa", 3)
    TestWithArguments("Ola");
    TestWithArguments("Maja", "book1", "book2");
}