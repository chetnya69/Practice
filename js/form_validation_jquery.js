// $('#email-form').submit(function(){
//     var name=document.getElementById('inputName');
//     var email=document.getElementById('inputEmail');
//     var password=document.getElementById('inputPassword');
//     var bio=document.getElementById('inputBIO');

//     $.ajax({
//         url:"https://formspree.io/chetnya1249.cse16@chitkara.edu.in",
//         method:"POST",
//         data:$(this).serialize(),
//         dataType:"JSON"
//     })

// });

// function submit() {
//     var link = 'mailto:chetnya1249.cse16@chitkara.edu.in?subject=Message from '
//              +document.getElementById('inputEmail').value
//              +'&body='+document.getElementById('inputEmail').value;
//     window.location.href = link;
// }

function check(){
    var name=document.getElementsByName("name").value;
    console.log(name);
    var email=document.getElementsByName("email").value;
    console.log(email);
    var pass=document.getElementsByName("Pass").value;
    console.log(pass);
    var bio=document.getElementsByName("bio").value;
    console.log(bio);

}