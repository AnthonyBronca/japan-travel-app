


/*

Make a calculator. Make sure to use helper functions for easier usage.

Considerations that calculator should have:
    - Can add using "+"
    - Can subtract using -"
    - Can multiply using "-"
    - Can divide using "/"



Additional features for changing type:
    - Can insert decimal using "."
        - Note: If a decimal is already inside the string of number, don't add more



*/
type TypeEl = "+" | "-" | "/" | "%" | "clear" | "." | "=" ;

let current = "0";
let storedVal = "";
let currOperator: TypeEl | "" = "";


const handleOperator = ():number => {
    if(currOperator === "+"){
        let currNum = parseInt(current);
        let currStored = parseInt(storedVal);
        return currNum + currStored;
    } else{
        return 0;
    }

}

const storeOperator = (operator: TypeEl): void => {
    currOperator = operator;
    storedVal = current;
    current = "0";
}


function calculator(el: number, operator: "string"){




}
