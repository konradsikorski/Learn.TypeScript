namespace Functions.This{
    let person = {
        name: "Konrad",
        getNameBuilder: function(){
            // ERROR: the 'this' will refere to window nat the object and TS will 
            return function(){
                //@ts-ignore - this is required becouse TS will not allow to compile becouse this is of type any
                return "getNameBuilder: " + this.name;// + this.name;
            }
        },

        getNameBuilderArrow: function(){
            // the arrow function will change the behavior ant set the 'this' to the object
            return () => {
                return "getNameBuilderArrow: " + this.name;
            }
        }
    }

    let nameBuilder = person.getNameBuilder();
    console.log("old: " + nameBuilder());
    let nameBuilderArrow = person.getNameBuilderArrow();
    console.log("arrow: " + nameBuilderArrow());

    //----------
    interface UIElement {
        addClickListener(onclick: (this: void, e: MyEvent) => void): void;
    }

    interface MyEvent {
        timeStamp: number;
    }

    class Handler {
        timestamp: number;
        onClickBad(this: Handler, e: MyEvent) {
            this.timestamp = e.timeStamp;
            console.log('clicked!: ' + this.timestamp);
        }
        onClickGood(this: void, e: MyEvent) {
            // this.timestamp = e.timeStamp; // ERROR: can't use this here because it's of type void
            console.log('clicked!');
        }
        onClickGoodArrow = (e: MyEvent) => { 
            this.timestamp = e.timeStamp; 
            console.log('clicked!: ' + this.timestamp);
        }
    }

    let uiElement: UIElement = {
        addClickListener(onclick: (this: void, e: MyEvent) => void): void{
            onclick({
                timeStamp: 10
            });   
        }
    }; 

    let h = new Handler();
    // uiElement.addClickListener(h.onClickBad); // ERROR: onClickBad expect 'this' to be Handler but UIElement expect void 
    uiElement.addClickListener(h.onClickGood);
    uiElement.addClickListener(h.onClickGoodArrow);
}

