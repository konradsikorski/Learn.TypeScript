namespace Classes.Inheritance{
    class Base{
        private _private : string;
        protected _protected: string = 'base-protected';
        public _public : string = 'bas-public';

        constructor(privateValue: string){
            this._private = privateValue;
        }

        toString(){
            return `Base.ToString() > _private: ${this._private}, _protected: ${this._protected}, _public: ${this._public}`;
        }
        
        getProtected(){
            return this._protected;
        }
    }

    class Derived1 extends Base {
        setProtected(value: string){
            this._protected = value;
        }

        // ERROR: duplicate method
        // setProtected(value: string, ohterValue: string){
        //     this._protected = value;
        // }

        getPrivate(){
            // return this._private; // ERROR: cannot acces private variable
        }
    }

    class Derived2 extends Base{
        constructor(privateValue: string, protectedValue: string){
            //this._public = 'D2-public'; // ERROR: cannot use this before super()
            super(privateValue); // this line is required
            this._public = "D2-public";
            this._protected = protectedValue;
        }

        public toString(/*value:string*/ /*ERROR: must be the same signature as base*/): string{
            let response = super.toString();
            return `D2.ToString() > ${response}`;
        }

    }

    console.log('=== D1 ===');
    let d1 = new Derived1("Derived1");
    d1.setProtected("d1-protected");
    // console.log(d1._private); // ERROR: cannot access private variable
    // console.log(d1._protected); //ERROR: cannot access protected variable
    console.log('d1.public: ' + d1._public);
    console.log(`d1.getProtected > ${d1.getProtected()}`);
    console.log(`d1.tostrig() > ${d1.toString()}`);

    console.log('=== D2 ===');
    let d2 = new Derived2("d2-private", "d2-protected");
    console.log('d2.public: ' + d2._public);
    console.log(`d2.getProtected > ${d2.getProtected()}`);
    console.log(`d2.tostrig() > ${d2.toString()}`);
}