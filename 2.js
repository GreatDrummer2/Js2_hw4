(function($){
 $(function(){
  $("div.wrapper > input[type='submit']").on('click',function(){
    var arr = $(":text").map(function(item){
      return this.value;
    });
    var obj ={
      username:'',
      password:'',
      email:'',
      gender:'',
      credit_card:'',
      bio:'',
      birth:'',
    }
    var counter = 0;
    for(var key in obj){
      obj[key] = arr[counter];
      counter++;
    }
    $.post('validator.php',obj,function(data){console.log(data)},'json');
  });
 })
})(jQuery);