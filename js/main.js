window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
}
function isTextPresent(id, errMsg) {
    var textBox = document.getElementById(id);
    var fName = textBox.value;
    if (fName == "") {
        textBox.nextElementSibling.innerHTML = errMsg;
        return false;
    }
    textBox.nextElementSibling.innerHTML = "*";
    return true;
}
