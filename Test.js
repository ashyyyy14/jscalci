function clearDisplay() {
  document.getElementById('abc').value = '';
}

function appendToDisplay(value) {
  document.getElementById('abc').value += value;
}

function calculateResult() {
 
      const result = eval(document.getElementById('abc').value);
      document.getElementById('abc').value = result;
  
}
