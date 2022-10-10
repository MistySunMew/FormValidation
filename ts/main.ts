window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    
    //Validate date
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if(!isValidDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Invalid Date. Format should be mm/dd/yyyy";
    }
}

/**
 * tests to see if a date is in the mm/dd/yyyy or m/d/yyyy format
 * @param input string you want to test for a date
 * @returns wether or not the input is a date
 */
function isValidDate(input:string):boolean {
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}

/**
 * Resets all spans back to the default text
 */
function resetErrorMessages():void {
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}

/**
 * Returns true if the given text box has any data
 * @param id the id of the <input type="text"> to validate
 * @param errMsg the message to display in the sibling of the textbox
 * @returns 
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let fName = textBox.value;
    if (fName == "") {
        textBox.nextElementSibling.innerHTML = errMsg;
        return false;
    }
    return true;
}