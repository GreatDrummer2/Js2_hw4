(function($){
 $(function(){
  $('div.tabs > ul.tabs_cap > li').on('click',function(){
    $(this).addClass('activated').siblings().removeClass('activated')
    .closest('div.tabs').find('div.content').removeClass('active').eq($('li').index($(this))).addClass('active');
  });
 })
})(jQuery);