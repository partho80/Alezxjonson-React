(function ($) {
  "use strict";


  /*---------------------
     Header
  ---------------------*/
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
      $('.header-area').addClass('header-bg');
    } else {
      if ($('.navbar-collapse').hasClass('show')) {} else {
        $('.header-area').removeClass("header-bg");
      }
    }
  });


  /*---------------------
      Navbar
  ----------------------*/
  $(window).on('load', function () {
    $('.dropdown-menu').hover(function () {
      $(this).siblings().toggleClass("active");
    });
  });


  /*---------------------
      Hamburger Menu
  ---------------------*/
    const myBtn = $('#ham-btn');
    const myBox = $('#myBox');

    myBtn.on('click', function () {
      myBox.toggleClass('ham-content');
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });

  /*---------------------
      Mouse Direction
  ---------------------*/
  $('.dh-container').directionalHover({
    overlay: "dh-overlay",
    easing: "swing",
    speed: 100

  });


  /*---------------------
    Scroll to top
  ---------------------*/
  $('body').materialScrollTop();



  /*---------------------
    Testimonial Slider
  ---------------------*/
  $('.testimonial-slider').slick({
    speed: 600,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

 

  /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function() {
      $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });


  /*---------------------
   Isotop
--------------------- */
  $(window).on('load', function () {
    $('.main-iso').isotope({
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    $('.iso-nav ul li').on('click',function () {
      //ACTIVE CLASS
      $('.iso-nav ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.main-iso').isotope({
        filter: selector
      });
      return false;
    })
  })


  /*---------------------
     Contact Form
    --------------------- */
    if ($('body').find('.contact-form').length !== 0) {
      // Form 1
      $('.cf-msg').hide();
      $('form#cf button#submit').on('click', function () {
  
        var firstName = $('#firstName').val();
        var email = $('#email').val();
        var subjectName = $('#subjectName').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
        if (!regex.test(email)) {
          alert('Please enter valid email');
          return false;
        }
  
        firstName = $.trim(firstName);
        subjectName = $.trim(subjectName);
        email = $.trim(email);
        msg = $.trim(msg);
  
        if (firstName != '' && email != '' && msg != '') {
          var values = "firstName=" + firstName + "&subjectName=" + subjectName + "&email=" + email + " &msg=" + msg;
          $.ajax({
            type: "POST",
            url: "assets/php/mail.php",
            data: values,
            success: function () {
              $('#firstName').val('');
              $('#subjectName').val('');
              $('#email').val('');
              $('#msg').val('');
  
              $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
              setTimeout(function () {
                $('.cf-msg').fadeOut('slow');
              }, 4000);
            }
          });
        } else {
          $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
      });
  
    }

}(jQuery));