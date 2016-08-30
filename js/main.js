 "use strict"; 

  function highlightCurrentLink() {
      var arr = document.getElementsByTagName("a");
      for (var i = 0, len = arr.length; i < len; ++i) {
          if (arr[i].href == window.location.href) {
              arr[i].style.fontWeight = "bold";
              // break;
          }
      }
  }
  highlightCurrentLink();


// $(document).ready() {
    // $('.fade-in li').hide(); 

    // $('.fade-in li').each(function(index) {
    //     $(this).delay(50*index).fadeIn(200);
    // });
// });


  $(".fade-list li").hide().each(function(i) {
    console.log(i)
      $(this).delay(100*i).fadeIn(1000);
  });


    
    // $('.fade-list li').hide().each(function(index) {
    //     $(this).delay(200*index).fadeIn();
    //     // eT += 200;
    // });


// $(".fade-list li").each(function(index) {
//     $(this).delay(400*index).fadeIn(300);
//     console.log(index);
// });


// var count = $('.fade-in li').length;
// console.log(count)
// var start = 0;
// function sequence(){
// $('.fade-in li').eq(start).fadeIn(1000,function(){
//     start++;
//     if(start<count) sequence();
// });
// }
// sequence();