$(document).ready(function() {
  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
  });


  $(document.body).on("click", ".code-copy", function(event){
    var value = $(this).parent().find('.code-content').text();
    navigator.clipboard.writeText(value);
    $('.code-copy').removeClass('active');
    $(this).addClass('active');
  });

  $("pre code").each(function() {
     var html = $(this).html();
     var pattern = html.match(/\s*\n[\t\s]*/);
     $(this).html(html.replace(new RegExp(pattern, "g"), '\n'));
  });

  var lastScrollTop = 10;

  function checkScroll(){
    var scrollTop = $(this).scrollTop();
    
    if (scrollTop > lastScrollTop) {
        $('.main-header').addClass('hidden');
    } else {
      $('.main-header').removeClass('hidden');
    }
    
    lastScrollTop = scrollTop;

    if($(this).scrollTop() > 10) {
      $('.main-header').addClass('fixed');
    } else {
      $('.main-header').removeClass('fixed');
    }

    if($('html').hasClass('hystmodal__opened')) {
      $('.main-header').addClass('hidden');
    }
  }

  
  checkScroll();
  $(window).scroll(checkScroll);


  $('[data-toggle="modal"]').on('click', function(){
    $('body').addClass('fixed');
  });


  $(".link-holder a").on("click", function(e) {
    e.preventDefault();
    var link = $(this).parent().find('.toggle-content').clone();
    $(".modal-body .toggle-content").remove();
    link.appendTo(".modal-body");
  });

  $(".button-holder button").on("click", function(e) {
    e.preventDefault();
    var link = $(this).parent().find('.toggle-content').clone();
    $(".modal-body .toggle-content").remove();
    link.appendTo(".modal-body");
  });
});

