var onDisplay = document.getElementById("display");

function viewInDisplay(input) {
    onDisplay.value += input;
}

function clearDisplay() {
    onDisplay.value ="";
    
}

function calculate() {
    try {
        onDisplay.value = eval(onDisplay.value);
    }

   catch(Error) {
    onDisplay.value = "Error";
   }
    
}