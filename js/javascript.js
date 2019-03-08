function screen_check(){

    if ($(window).width() <= 1210) { 
        
        var section = $("#asideSearch")[0];
        section.style.width="150px";
        
      } 

      if ($(window).width() <= 800) { 
        
        $("#asideSearchBtn").addClass("mx-auto");
        $("#asideSearch").addClass("mx-auto");
        
      }
     

    if ($(window).width() <= 450) { 
      $("#deleteAside").remove();
      var section = $("#section")[0];
      section.style.width="100%";
      var section = $("#Search")[0];
      section.style.width="200px";
      var section = $("#Search")[0];
      section.style.marginRight="5px";
     
    } 
}

screen_check();
$(window).on('resize', function(){
screen_check();
});

