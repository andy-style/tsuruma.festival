$(function(){

$('.i-p-hover').hover(
  function(){
    $(this).find('.i-p-cap').addClass('i-p-active');
  },
  function(){
    $(this).find('.i-p-cap').removeClass('i-p-active');
  }
);




});
