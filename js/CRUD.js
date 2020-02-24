var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["FirstName"] = document.getElementById("FirstName").value;
    formData["LastName"] = document.getElementById("LastName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["PhoneNumber"] = document.getElementById("PhoneNumber").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.FirstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.LastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.PhoneNumber;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("PhoneNumber").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("FirstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("LastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("PhoneNumber").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.FirstName;
    selectedRow.cells[1].innerHTML = formData.LastName;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.PhoneNumber;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("FirstName").value == "") {
        isValid = false;
        document.getElementById("FirstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("FirstNameValidationError").classList.contains("hide"))
            document.getElementById("FirstNameValidationError").classList.add("hide");
    }
    return isValid;
}