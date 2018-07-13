$(document).ready(function(){

    var isValid = true;

    function validate() {
        var x = $('.form__input').val();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            isValid = false;
        } else{
            isValid = true;
        }
    }

    $('.form__input').blur(validate());

    $( ".form__btn" ).click(function() {
               
        if(isValid){            
            swal({
                icon: "success",
                title: "Success!",
                text: "Thank you for being with us!"
            });
        } else{
            swal({
                icon: "error",
                title: "Error!",
                text: "Please enter a valid email address!"
              });
        }

    });


});