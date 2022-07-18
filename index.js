function validFormFieldInput() {
    let input = document.forms['ticket']['fromto'].value;
    if (input == "") {
        alert("Please input from and destination.");
        return false;
    } else {
        alert("Your query has been submitted.")
        return true;
    }
}

// const newTaskNameInput = document.querySelector('#newTaskNameInput');