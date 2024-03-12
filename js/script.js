//navbar

$(document).ready(function () {
    
    $("#bar").click(function() {
       
        $("nav ul").css("right", " -100px");
        $("#bar").css("display", " none");

       
    });
    $("#close").click(function() {
       
        $("nav ul").css("right", " -3000px");
        $("#bar").css("display", "block");


    });
    $("li").click(function() {
       
        $("nav ul").css("right", " -3000px");
        $("#bar").css("display", "block");


    });

    });

    //reviews
    $(document).ready(function () {
        var currentIndex = 1;
    
        function showContent(index) {
            $("#rev-content1, #rev-content2, #rev-content3").hide();
            $("#s1, #s2, #s3").css("background-color", "aliceblue");
    
            $("#rev-content" + index).show();
            $("#s" + index).css("background-color", "rgb(132, 0, 255)");
        }
    
        function changeContent() {
            currentIndex = (currentIndex % 3) + 1;
            showContent(currentIndex);
        }
    
        // Initial setup
        showContent(currentIndex);
    
        // Auto change every 3 seconds
        setInterval(changeContent, 3000);
    
        // Click events
        $("#s1").click(function () {
            currentIndex = 1;
            showContent(currentIndex);
        });
    
        $("#s2").click(function () {
            currentIndex = 2;
            showContent(currentIndex);
        });
    
        $("#s3").click(function () {
            currentIndex = 3;
            showContent(currentIndex);
        });
    });
    


//payment
function redirectToPaymentPage() {
    window.location.href = "payment.html";
}

function closeSuccessCard() {
    var successCard = document.querySelector('.success-card');
    successCard.style.display = 'none';

  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    var startFreeTrialLink = document.querySelector('.free a');
    var checkOutLink = document.querySelector('a[href=""]');
    var closeButton = document.querySelector('.close-button');
    var successMessage = document.querySelector('.success-message');
    var successCard = document.querySelector('.success-card');
  
    // Add a click event listener to the "Start Free Trial" link
    startFreeTrialLink.addEventListener('click', function (event) {
      // Prevent the default link behavior (following the href)
      event.preventDefault();
  
      // Show the success message
      successMessage.style.display = 'block';
    });
  
    // Add a click event listener to the "Check Out" link
    checkOutLink.addEventListener('click', function (event) {
      // Prevent the default link behavior (following the href)
      event.preventDefault();

      // Show the success card for successful payment
      successCard.style.display = 'block';

    });
       // Add a click event listener to the "Check Out" link
       closeButton.addEventListener('click', function (event) {
        // Prevent the default link behavior (following the href)
        event.closeSuccessCard();
  
        // Show the success card for successful payment
  
      });
  });
  






 