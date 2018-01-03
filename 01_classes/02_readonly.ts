namespace Classes.ReadonlyExample {
 
    class ReadonlyExample{
        readonly _readonly: string;

        constructor(
            value: string, 
            // if you specify parameter as 'readonly', then new readonly class variable will be created
            readonly _publicReadonly: string,
            // this will create protected variable for this class
            protected readonly _protectedReadonly: string,
            // if you specify acesor type (public, private, protected) it will create a class variable too
            public _public: string
        ) {
            this._readonly = value;
        }

        setReadonly(value: string){
            // this._readonly = value; // ERROR: cannot set readonly
        }

        getProtectedReadonly(){
            return this._protectedReadonly;
        }
    }

    let re1 = new ReadonlyExample(
        "readonly-value", 
        "publicReadonly-value", 
        "protectedReadonly-value", 
        "public-value");
    // re1._readonly = "value"; // ERROR: cannot change readonly
    console.log('re1._readonly: ' + re1._readonly);
    console.log('re1._publicReadonly: ' + re1._publicReadonly);
    console.log('re1.getProtectedReadonly(): ' + re1.getProtectedReadonly());
    console.log('re1._public: ' + re1._public);
}