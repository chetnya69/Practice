
$('#sidenavcolor').change(function(){
    if($(this).val() == 'red'){ 
      $(".sidenav").css('background-color', 'red');
    }
      if($(this).val() == 'green'){
      $(".sidenav").css('background-color', 'green');
    }
      if($(this).val() == 'blue'){
      $(".sidenav").css('background-color', 'blue');
    }
  });

  $('#maincolor').change(function(){
    if($(this).val() == 'red'){ 
      $(".main").css('background-color', 'red');
    }
      if($(this).val() == 'green'){
      $(".main").css('background-color', 'green');
    }
      if($(this).val() == 'blue'){
      $(".main").css('background-color', 'blue');
    }
  });

$('#navcolor').change(function(){
    if($(this).val() == 'red'){ 
        $(".navbar1").css('background-color', 'red');
    }
        if($(this).val() == 'green'){
        $(".navbar1").css('background-color', 'green');
    }
        if($(this).val() == 'blue'){
        $(".navbar1").css('background-color', 'blue');
    }
});

$('#tablestyle').change(function(){
    if($(this).val() == 'bordered'){ 
        $(".table").css('border', '1px solid black');
    }
        if($(this).val() == 'dotted'){
        $(".table").css('border', 'dotted');
    }
});
