(function($){
 $(function(){
  $('tabs_cap').on('click', 'li:not(.activated)', function() {
    $(this)
      .addClass('activated').siblings().removeClass('activated')
      .closest('div.tabs').find('div.content').removeClass('active').eq($(this).index()).addClass('active');
  });
 })
})(jQuery);