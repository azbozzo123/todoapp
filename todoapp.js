//check off tasks clicked on
$('ul').on("click", "li", function(){
     $(this).toggleClass("complete");
});

//click on X to delete task
$('ul').on("click", "span", function(event){
     event.stopPropagation();
     $(this).parent().fadeOut(500, function(){
          $(this).remove();
     });
});

//add new task to todo list
$('input[type="text"]').on("keypress", function(event){
     if (event.which === 13){
          var task = $(this).val();
          $('ul').append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + task + '</li>');
          $(this).val('');
     }
});

//reveal add/remove new task input section
$('.fa-plus-square-o').on('click', function(){
     $('input[type="text"]').slideToggle();
});