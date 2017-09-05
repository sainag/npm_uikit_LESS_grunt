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
