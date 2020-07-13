$(function(){

$('.i-p-hover').hover(
  function(){
    $(this).find('.i-p-cap').addClass('i-p-active');
  },
  function(){
    $(this).find('.i-p-cap').removeClass('i-p-active');
  }
);

$('.festival_entry').click(function() {
  var $entry = $(this).find('.summary');
  if ($entry.hasClass('open')) {
    $entry.removeClass('open');
    $entry.slideUp(100);
    $(this).find('span').text('+');
    $(this).find('.entry_title').css('border-radius','15px');
  } else {
    $entry.addClass('open');
    $entry.slideDown(100);
    $(this).find('span').text('-');
    $(this).find('.entry_title').css('border-radius','15px 15px 0 0');

  }
});





});
