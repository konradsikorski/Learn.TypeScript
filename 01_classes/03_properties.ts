namespace Classes.Properties{
    class Example{
        private _field: string;

        get field(){
            return this._field;
        }

        set field(value: string /*type must be the same as type of _field*/) {
            if(value !== "error"){
                this._field = value; 
            }
        }

        set sameField(value: string){
            this._field = value;
        }
    }

    let e = new Example()
    e.field = "field-value";
    console.log(`e.field: ${e.field}`);
    e.field = "error";
    console.log(`e.field: ${e.field}`);
    e.sameField = "error";
    console.log(`e.field: ${e.field}`);
}