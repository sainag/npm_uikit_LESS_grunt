function toggle_about(){
  var url = window.location.href;
  var div = url.split("#"); var req_div=div[1];
  if(typeof req_div!=='undefined' && req_div==='about-ebureau'){
    toggle_div(req_div);
  }
  else{
    $('#'+req_div).hide();
  }
}

function toggle_div(d){
  $('#'+d).slideToggle();
  if(d==='about-ebureau')  $("body").animate({scrollTop:($("body").height()/6)}, 'slow');
}

function toggle_accordion_icons(){
  $(".ltu-faq .uk-accordion").on('toggle.uk.accordion',function(event, active, toggle, content){
    $(".ltu-faq .uk-accordion .uk-accordion-title i").addClass('uk-icon-plus').removeClass('uk-icon-minus');
    if($(toggle).attr('class') == 'uk-accordion-title uk-active'){
      $(toggle).children().addClass('uk-icon-minus').removeClass('uk-icon-plus');
    }
  });
}
function show_book(req_book){
  $("#howtodoscience, #gallipoli, #caesar, #frenchrevolution, #keyconcepts, #victorian").hide();
  if(typeof req_book=='undefined'){
    var url = window.location.href;
    var div = url.split("#"); var req_book=div[1];
    if(typeof req_book!='undefined'){
      $("#"+req_book).show();
    }
    else {
      $("#howtodoscience, #gallipoli, #caesar, #frenchrevolution, #keyconcepts, #victorian").show();
    }
  }
  else{
    $("#"+req_book).show();
  }
  setTimeout(function(){
    $("body").animate({scrollTop:0}, 'slow');
  },100);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-91236944-1', 'auto');
ga('send', 'pageview');

$(".download_pdf, .view_book").on('click',function(){
  try{ ga('send', 'event', $(this).attr('title'),'Click',$(this).html());}
  catch(e){}
});

$(".about_ebureau" ).on( "click", function( event, ui ) {
try{ ga('send', 'event', 'About eBureau','Click','About eBureau');}
catch(e){}
});

$(".uk-slidenav-next" ).on( "click", function( event, ui ) {
try{ ga('send', 'event', 'Slide Show Next','Click','Slide Show');}
catch(e){}
});

$(".uk-slidenav-previous" ).on( "click", function( event, ui ) {
try{ ga('send', 'event', 'Slide Show Previous','Click','Slide Show');}
catch(e){}
});
