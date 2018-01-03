namespace Functions.Overloads{

    function getValue(x:number): number;
    function getValue(x:string): string;
    function getValue(x:any): any {
        if(typeof x == "string"){
            return "same string";
        }
        else if(typeof x == "number"){
            return 10;
        }

        return {};
    }

    function getValueVersion2(x:number): number;
    function getValueVersion2(x:string): string;
    function getValueVersion2(x:number|string): number|string {
        if(typeof x == "string"){
            return "same string";
        }
        else if(typeof x == "number"){
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
}