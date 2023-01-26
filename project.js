$(document).ready(function(){
    $('.slider').cycle({
        fx: 'fade' ,
        prev: '#prev',
        next: '#next'
    });
});

/*Selector*/
$(document).ready(function(){
    $("button").click(function(){
      $("#test").hide();
    });
  });
  /*Events*/ 
  $(document).ready(function(){
    $("p").dblclick(function(){
      $(this).hide();
    });
  });
  /*Hide show*/ 
  $(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
  //callback
  $(document).ready(function(){
    $("button").click(function(){
      $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
      });
    });
  });
  //add
  $(document).ready(function(){
    $("#btn1").click(function(){
      $("p").append(" <b>Appended text</b>.");
    });
  
    $("#btn2").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });
  
