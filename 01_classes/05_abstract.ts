namespace Classes.Abstract{
    abstract class AbstractClass {
        abstract abstractMethod() : void;
        public standardMethod(){
            console.log('standard method')
        }

        abstract get abstractProperty();
        abstract set abstractProperty(value:string);
    }

    class Implementation extends AbstractClass {
        // the set property is not required
        get abstractProperty(){
            return "abstractProperty-value";
        }

        abstractMethod(): void {
            console.log("Implemented abstract class");
        }
    }

    class ImplementationSetter extends AbstractClass {
        abstractMethod(): void {
            throw new Error("Method not implemented.");
        }

        private _field: string;
        
        get abstractProperty(){
            return this._field;
        }
        set abstractProperty(value: string){
            this._field = value;
        }
    }

    // let a = new AbstractClass(); // ERROR: cannot create instance of absract class
    let i = new Implementation();
    i.abstractMethod();
    i.standardMethod();
    console.log("i.abstratcProperty: " + i.abstractProperty);
    // i.abstractProperty = "test";

    let is = new ImplementationSetter();
    is.abstractProperty = "newValue";
    console.log("is.abstratcProperty: " + is.abstractProperty);
}