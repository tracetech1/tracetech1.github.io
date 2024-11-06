$(document).ready(function(){

    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-times');
       $('.navbar').toggleClass('nav-toggle');
   });

   $(window).on('load scroll',function(){
       $('.fa-bars').removeClass('fa-times');
       $('.navbar').removeClass('nav-toggle');

       if($(window).scrollTop()>35)
       {
           $('.header').css({'background':'#fff','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
       }
       else
       {
           $('.header').css({'background':'#fff','box-shadow':'none'});
       }
   });

   $(function(){
    $('#subForm').ebcaptcha();
  });


  
  
  

  function checkform(theform){
    var why = "";
    
    if(theform.CaptchaInput.value == ""){
    why += "- Please Enter CAPTCHA Code.\n";
    }
    if(theform.CaptchaInput.value != ""){
    if(ValidCaptcha(theform.CaptchaInput.value) == false){
    why += "- The CAPTCHA Code Does Not Match.\n";
    }
    }
    if(why != ""){
    alert(why);
    return false;
    }
    }
    
    var a = Math.ceil(Math.random() * 9)+ '';
    var b = Math.ceil(Math.random() * 9)+ '';
    var c = Math.ceil(Math.random() * 9)+ '';
    var d = Math.ceil(Math.random() * 9)+ '';
    var e = Math.ceil(Math.random() * 9)+ '';
    
    var code = a + b + c + d + e;
    document.getElementById("txtCaptcha").value = code;
    document.getElementById("CaptchaDiv").innerHTML = code;
    
    // Validate input against the generated number
    function ValidCaptcha(){
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
    if (str1 == str2){
    return true;
    }else{
    return false;
    }
    }
    // Remove the spaces from the entered and generated code
    function removeSpaces(string){
    return string.split(' ').join('');
    }


   $(document).ready(function() {

    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: false,
      loop: true,
      nav: false,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
     var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }   
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
    });
  });





$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
       $('.back-to-top').fadeIn('slow');
   } else {
       $('.back-to-top').fadeOut('slow');
   }
});
$('.back-to-top').click(function () {
   $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
   return false;
});


});