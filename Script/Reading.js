 $(document).ready(function(){
      
        $(".sel").click(function(){
           var page = $(this).attr("href");
           var text = page.slice(1,page.length);
            if(page === "#") return;
            $.ajax({
               url: text, 
               success : function(result){
                       $("#demoObject").html(result);      
           }}); 
        });
        
});


