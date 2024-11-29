// Get the display element
const display = document.getElementById("display");

// Function to append value to the display
function appendValue(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = "Your math is not correct"; // Handle invalid expressions
  }
}

// const hamburger = document.getElementById("hamburger");
// const nav = document.querySelector(".nav");

// hamburger.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });
