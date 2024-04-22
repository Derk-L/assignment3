/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 0;
let numberOfDays = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function mondayClicked() {
    if (monday.classList.contains("clicked")) {
        numberOfDays--;
    } else {
        monday.classList.add("clicked");
        numberOfDays++;
        calculate();
    }
}

function tuesdayClicked() {
    if (tuesday.classList.contains("clicked")) {
        numberOfDays--;
    } else {
        tuesday.classList.add("clicked");
        numberOfDays++;
        calculate();
    }
}

function wednesdayClicked() {
    if (wednesday.classList.contains("clicked")) {
        numberOfDays--;
    } else {
        wednesday.classList.add("clicked");
        numberOfDays++;
        calculate();
    }
}

function thursdayClicked() {
    if (thursday.classList.contains("clicked")) {
        numberOfDays--;
    } else {
        thursday.classList.add("clicked");
        numberOfDays++;
        calculate();
    }
}

function fridayClicked() {
    if (friday.classList.contains("clicked")) {
        numberOfDays--;
    } else {
        friday.classList.add("clicked");
        numberOfDays++;
        calculate();
    }
}

monday.addEventListener("click", mondayClicked);
tuesday.addEventListener("click", tuesdayClicked);
wednesday.addEventListener("click", wednesdayClicked);
thursday.addEventListener("click", thursdayClicked);
friday.addEventListener("click", fridayClicked);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button")

function clearClicked() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    calculatedCost = 0;
    numberOfDays = 0;
    calculate();
}

clearButton.addEventListener("click", clearClicked);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDayButton = document.getElementById("half");

function halfDayClicked() {
    costPerDay = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculate();
}

halfDayButton.addEventListener("click", halfDayClicked);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let fullDayButton = document.getElementById("full")

function fullDayClicked() {
    costPerDay = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculate();
}

fullDayButton.addEventListener("click", fullDayClicked);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    let calculatedCost = costPerDay * numberOfDays;
    document.getElementById("calculated-cost").innerHTML = calculatedCost;
}
