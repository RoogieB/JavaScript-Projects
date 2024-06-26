//object to keep track of values
const Calculator = {
    Display_Value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    Operator: null,
};

//modifies the values each time the buttons are clicked
function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand} = Calculator;

    if(Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//this section handles decimal point
function Input_Decimal(dot){
    if(Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //adds the decimal point
        Calculator.Display_Value += dot;
    }
}

//this section handles operators
function Handle_Operator(Next_Operator){
    const {First_Operand, Display_Value, Operator} = Calculator;
    const Value_Of_Input = parseFloat(Display_Value);

    if(Operator && Calculator.Wait_Second_Operand){
        Calculator.Operator = Next_Operator;
        return;
    }

    if(First_Operand == null){
        Calculator.First_Operand = Value_Of_Input;
    } else if (Operator){
        const Value_Now = First_Operand || 0;

        let result = Perform_Calculation[Operator](Value_Now, Value_Of_Input);

        result = Number(result).toFixed(9);
        result = (result * 1).toString();

        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.Operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset(){
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.Operator = null;
}

//updates the calculator screen
function Update_Display(){
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//monitors the button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {

        const { target }  = event;

        //if not button then exit function
        if(!target.matches('button')){
            return;
        }

        if(target.classList.contains('operator')){
            Handle_Operator(target.value);
            Update_Display();
            return;
        }

        if (target.classList.contains('decimal')){
            Input_Decimal(target.value);
            Update_Display();
            return;
        }

        //makes sure AC clears all inputs
        if(target.classList.contains('all-clear')){
            Calculator_Reset();
            Update_Display();
            return;
        }
        Input_Digit(target.value);
        Update_Display();
    }
)
