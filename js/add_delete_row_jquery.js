$(document).ready(function () {
    $("#add").on("click", function () {
        var row = $("#mytable").val();
        $("#tablebody").append('<tr>'+
            '<td>Chetnya</td>' +
            '<td>Gupta</td>' +
            '<td>21</td>' + 
            '<td><button id="delete" onclick="deleteRow(this);">Delete Row</button></td>' +
        '</tr>');
    });

});

function deleteRow(obj) {
    $(obj).parent().parent().remove();
}