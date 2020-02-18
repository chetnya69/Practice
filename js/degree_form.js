
// $(document).ready(function(){
//     var $category = $('select[name=category]'),
//         $items = $('select[name=items]');

//     $category.change(function(){
//         var $this = $(this).find(':selected'),
//             rel = $this.attr('rel'),
//             $set = $items.find('option.' + rel);

//         $items.show().find('option').hide();

//         $set.show().first().prop('selected', true);
//     });
// });

// document.getElementById('degree').onchange = function () {
//     if(value==1){

//     }
// }

// $("#degree").select2().change(function () {
//     var selectdegree = $('select').val();
//     if (selectdegree) {
//     //If the user made a selection, hide every row of the table
//         $('tr').hide();
//         //Show only rows where the text in the first column
//         //corresponds to one of the user's selections
//         $('td:first-child').each(function (i, cell) {
//             if (selectdegree.indexOf($(cell).text()) > -1) {
//                 $(cell).parent().show();
//             }
//         });
//     } else {
//     //Show all rows when there is no selection
//         $('tr').show();
//     }
// });

// $("#degree").select2().change(function () {
//     var selectdegree = $('select').val();
//     if (selectdegree) {
//         $('tr').hide();
//         console.log(selectdegree);
//         $('td:first-child').each(function (i, cell) {
//             if (selectdegree.indexOf($(cell).text()) > -1) {
//                 $(cell).parent().show()
//             }
//         });
//     }
//     else{
//      $('tr').show();   
//     }

// });

function degree(opts) {
    var chks = document.getElementsByClassName("phd");
    var chk_all_degree = document.getElementsByClassName("xyz");
    for (var i = 0; i < 8; i++) {
        chk_all_degree[i].disabled = true;
    }
    if (opts.value == 'phd') {
        for (var i = 0; i < 3; i++) {
            chks[i].disabled = false;
        }
    }
    var chks2 = document.getElementsByClassName("bcom");
    if(opts.value == 'bcom') {
        for (var i = 0; i < 3; i++) {
            chks2[i].disabled = false;

        }
    }
    var chks3 = document.getElementsByClassName("arts");
    if(opts.value == 'arts') {
        for (var i = 0; i < 2; i++) {
            chks3[i].disabled = false;
        }
    }
    var chks4 = document.getElementsByClassName("btech");
    if(opts.value == 'btech') {
        for (var i = 0; i < 4; i++) {
            chks4[i].disabled = false;
        }
    }
}