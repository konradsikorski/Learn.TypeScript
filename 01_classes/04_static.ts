namespace Classes.Static{
    class Example{
        static staticField: number;
        private static _fieldPrivate: number;

        static get staticProperty(){
            return Example._fieldPrivate;
        }

        static set staticProperty(value: number) {
            Example._fieldPrivate = value;
        }

        static staticMethod(value: number): number{
            return value * this.staticField * Example.staticField;
        }

        public method(value: number): number{
            return value 
                + Example.staticField  
                // + this.staticField // ERROR: staticField is not a member of Example (cannot use 'this' for static)
                ;
        }
    }

    // ERROR: no static classes allowed
    //static class StaticClass{} 

    Example.staticField = 2;
    console.log("Example.staticField: " + Example.staticField);
    console.log("Example.staticMethod(3): " + Example.staticMethod(3));
    Example.staticProperty = 10;
    console.log("Example.staticProperty: " + Example.staticProperty);

    let e = new Example();
    console.log("e.method(4): " + e.method(4));
    // e.staticMethod(4); // ERROR: cannot access static member from instance
}