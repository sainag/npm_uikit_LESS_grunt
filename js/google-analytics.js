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
