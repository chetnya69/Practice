
$(document).ready(function () {
    $("#add").on("click", function () {
        var row = $("#mytable").val();
        $("#tablebody").append('<tr>'+
            '<td><label>name: </label> <input type="text"'+row+'" /></td>'+
            '<td><label>gender: </label> <input type="radio"' + row +'" /> <input type="radio"' + row +'" /></td>'+
            '<td><label>degrees: </label> <input type="checkbox"' + row + '"/> <input type="checkbox"' + row +'" /></td>' +
            '<td><label for="select">select:</label> <select id="dropdown"><option value="HTML">HTML</option><option value="CSS">CSS</option></select> </td>'+
            '<td><button id="btnDelete" onclick="deleteRow(this);">Delete Row</button></td>' +
        '</tr>');
    });

});

function deleteRow(obj) {
    $(obj).parent().parent().remove();
}