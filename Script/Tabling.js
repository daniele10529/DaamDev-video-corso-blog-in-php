$(document).ready(function(){
    var table = "#mytable";

        $("#maxrow").on("change",function(){

          $(".pagination").html("");
          var tnrum = 0;
          var maxrow = parseInt($(this).val());
          var totalrow = $(table+" tbody tr").length;

          $(table+" tr:gt(0)").each(function(){
             tnrum ++;
             if(tnrum > maxrow){
                 $(this).hide();
             }

             if(tnrum <= maxrow){
                 $(this).show();
             }

            });

             if(totalrow > maxrow){
                 var pagenum = Math.ceil(totalrow/maxrow);

                 for(var i=1; i <= pagenum; i++){
                     $(".pagination").append("<li data-page='"+i+"' class='listPage'><span>"+ i +"<span class='sr-only'></span></span></li>").show();
                 }
             }

             $(".pagination li:first-child").addClass("active");
             $(".pagination li").on("click",function(){

                var pagenum = $(this).attr("data-page");
                var trindex = 0;

                $(".pagination li").removeClass("active");
                $(this).addClass("active");

                $(table+" tr:gt(0)").each(function(){
                   trindex ++;

                   if(trindex > (maxrow*pagenum) || trindex <= ((maxrow*pagenum)-maxrow)){
                       $(this).hide();
                   }
                   else{
                       $(this).show();
                   }
             });
          });
        });
        
});


