function initMap(){var i={lat:49.800959,lng:24.039647},e=new google.maps.Map(document.getElementById("map"),{zoom:16,center:i});new google.maps.Marker({position:i,map:e})}$(document).ready(function(){$(".categories>div").on("click",function(){$(".categ-descr>div").removeClass("active"),$(".categories>div").removeClass("active-cat"),$(this).addClass("active-cat"),$(".categ-descr>div").eq($(".categories>div").index(this)).addClass("active active-animate")}),$(".gallery>div").on("click",function(){if($("body").css("overflow","hidden"),$(".gallery-inside").fadeIn(),$(".gallery-inside").css("display","grid"),"single"==$(this).attr("id"))for(var i=0;i<29;i++)$(".gallery-inside").append('<div class = "iside-block"><div class = "gallery-border"><img class="zoom" src="img/one-'+(i+1)+'.jpg"></div></div>');if("double"==$(this).attr("id"))for(i=0;i<20;i++)$(".gallery-inside").append('<div class = "iside-block"><div class = "gallery-border"><img class="zoom" src="img/double-'+(i+1)+'.jpg"></div></div>');if("stairs"==$(this).attr("id"))for(i=0;i<10;i++)$(".gallery-inside").append('<div class = "iside-block"><div class = "gallery-border"><img class="zoom" src="img/stairs-'+(i+1)+'.jpg"></div></div>');if("table"==$(this).attr("id"))for(i=0;i<9;i++)$(".gallery-inside").append('<div class = "iside-block"><div class = "gallery-border"><img class="zoom" src="img/table-'+(i+1)+'.jpg"></div></div>');if("kovka"==$(this).attr("id"))for(i=0;i<14;i++)$(".gallery-inside").append('<div class = "iside-block"><div class = "gallery-border"><img class="zoom" src="img/kovka-'+(i+1)+'.jpg"></div></div>');if("other"==$(this).attr("id"))for(i=0;i<10;i++)$(".gallery-inside").append('<div class = "iside-block"><div class = "gallery-border"><img class="zoom" src="img/other-'+(i+1)+'.jpg"></div></div>')}),$(".close-gallery").on("click",function(){$("body").css("overflow","auto"),$(".gallery-inside").fadeOut(),$(".iside-block").remove()}),$(".gallery-inside").on("click",".zoom",function(){$(".gallery-zoom").fadeIn(),$(".gallery-zoom").css("display","flex"),$(".gallery-inside").css("overflow","hidden"),$(".gallery-zoom").append('<div class="zoom-in"><img src="'+$(this).attr("src")+'"> <div class="close-gallery-zoom"></div></div>')}),$(".gallery-zoom").on("click",".close-gallery-zoom",function(){$(".gallery-zoom").fadeOut(),$(".zoom-in").remove(),$(".gallery-inside").css("overflow","auto")}),$(".menu").on("click","a",function(i){i.preventDefault();let e=$(this).attr("href"),s=$(e).offset().top;$("body, html").animate({scrollTop:s},1500)})});