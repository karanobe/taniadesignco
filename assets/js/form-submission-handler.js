$('.contact').on('submit',function(e){
    //optional validation code here

    e.preventDefault();
  
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbx9P6Q8P9Ek_HLSSXt0MoPuki8EgKdgKrCU810r6vo8xQ4tB_iX2WCDOlKbmiyEMg/exec",
        method: "POST",
        dataType: "json",
        data: $(".contact").serialize(),
        success: function(response) {
            
            if(response.result == "success") {
                $('.contact')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                alert("Something went wrong. Please try again.")
            }
        },
        error: function() {
            
            alert("Something went wrong. Please try again.")
        }
    })
});