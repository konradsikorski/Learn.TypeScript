namespace Functions.Types{
    let functionVariable : (a:number, b:number)=>number;

    functionVariable = function(x, y){
        return x+y;
    }

    console.log(functionVariable(1,2));
}