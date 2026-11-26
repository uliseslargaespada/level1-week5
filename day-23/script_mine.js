console.log("Hello from the browser");

// The document object or DOM
// The DOM is an in-memory representation of the webpage
console.log(document);

// There's also the console object or Console
console.log(console);

// These objects have functions that are accessible tru dot

// 2 important functions to get elements from HTML
const mainTitle = document.getElementById("main-title");

console.log(mainTitle);

const normalText = document.querySelector(".normal-text");

console.log(normalText);

// This is an attribute of the HTML Element
normalText.textContent = "Replaced with JavaScript"

// Get the Main CTA tru JS
const mainCta = document.getElementById("main-cta");

console.log(mainCta);

/* When HTML Elements or the browser has actions, we can capture that action tru JS */
// Use a function from the document object to capture the actions
// This function takes 2 params
// First - the action to capture
// A function to execute after that action
// We don't add the parenthesis of the function here because we don't want to call it, we just provide it to JS eventListener so the event can call it
mainCta.addEventListener("click", greetMessage);

function greetMessage() {
  alert("Hello from the click of the CTA");
}

// Call the HTML Elements with 2 query selectors
const detailsButton = document.querySelector("#details-button");
const activityMessage = document.querySelector("#activity-message");

let showDetails = false;

// Read more about the Callback hell from JS
function getHubMessage(isDetailed) {
  // If captures the true value of the boolean
  // Else captures the opposite of the IF, so the Else captures whatever the last IF didn't capture
  if (isDetailed) {
    return "Reading circle meets in the fiction room. Bring a notebook.";
  } else {
    return "Reading circle: a beginner-friendly activity.";
  }
}

function handleDetailsClick() {
  showDetails = !showDetails; // The ! transforms the value of a boolean, aka true to false or false to true
  activityMessage.textContent = getHubMessage(showDetails);

  if (showDetails) {
    detailsButton.textContent = "Show summary";
  } else {
    detailsButton.textContent = "Show details";
  }
}

detailsButton.addEventListener("click", handleDetailsClick);
// My Prediction - I think the message will change to "Reading circle meets in the fiction room. Bring a notebook."
// I was correct or I was wrong

// JS is not a Typed language, so it uses truthy and falsy values in conditions.
if (0) {
  console.log("Testing tru or false values");
}