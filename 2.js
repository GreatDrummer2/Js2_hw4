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
    var callBack =  function(data){
      $('input[type="text"]').removeClass('green');
      if(data.result){
        $('input[type="text"]').addClass('green');
      }
      else{
        console.log(data);
      }
    }

    $.post('validator.php',obj,callBack,'json');
  });
 })
})(jQuery);