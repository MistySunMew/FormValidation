window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
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
    textBox.nextElementSibling.innerHTML = "*";
    return true;
}