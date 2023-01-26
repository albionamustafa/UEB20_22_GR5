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
  
/*map at jeans*/
// Create a Map
const jeans = new Map();

// Set Map Values
jeans.set("Loose fit jeans", 29.99);
jeans.set("Straight-fit vintage jeans", 25.99);
jeans.set("Wide-leg ’90s jeans", 12.99);

document.getElementById("Mapping").innerHTML =jeans.get("Loose fit jeans");