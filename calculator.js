let currentInput = '0';
let previousInput = '';
let operator = null;

const display = document.querySelector("#display");

const buttons = document.querySelector(".buttons");

const clearBtn = document.querySelector("#clear");

const equalsBtn = document.querySelector("#equals");

const decimalBtn = document.querySelector("#decimal");

function updateDisplay(){
  display.textContent = currentInput;
}
function handleNumber(num){
  if(currentInput === '0'){
    currentInput = num;
  }else{
      currentInput += num;
  }
  
  updateDisplay();

}
function handleOperator(op){
  if(currentInput !== null && previousInput !== ''){
    calculate();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = '0';
  // updateDisplay();
}


function calculate(){
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  let result;

  switch(operator){
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = previous / current;
      break;
      default:
        return;

        
  }
  currentInput = result.toString();
        previousInput = '';
        operator = null;
        updateDisplay();
}

function clearDisplay(){
  currentInput = '0';
  previousInput = '';
  operator = null;
  updateDisplay();

}
function handleDecimal(){
  if(!currentInput.includes('.')){
    currentInput += '.';
    updateDisplay();
  }
}

buttons.addEventListener("click",(e)=>{
  const btn = e.target.closest("button");
  if(!btn) return;

  if(btn.dataset.number) return handleNumber(btn.dataset.number);
  if(btn.dataset.operator) return handleOperator(btn.dataset.operator);

  if(btn.id === 'clear') return clearDisplay();
  if(btn.id === 'equals') return calculate();
  if(btn.id === 'decimal') return handleDecimal();
})