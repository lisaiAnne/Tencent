window.onload=function(){
    $("section .leftBox p").click(function(){
        $(this).css({"backgroundColor":"white"});
        $("section .leftBox p").not($(this)).css({"backgroundColor":"#eeeeee"});
        // $("section .leftBox p").eq(0).css({"backgroundColor":"#eeeeee"});
        // $("section .leftBox p").eq(2).css({"backgroundColor":"#eeeeee"});
        // $("section .leftBox p").eq(3).css({"backgroundColor":"#eeeeee"});
        // $("section .leftBox p").eq(4).css({"backgroundColor":"#eeeeee"});
        // $("section .leftBox p").eq(5).css({"backgroundColor":"#eeeeee"});
    });
    $("section .leftBox p").eq(0).click(function(){
        $("section .rightBox").css({"display":"block"});
        $("section .rightBoxTwo").css({"display":"none"});

    });
    $("section .leftBox p").eq(1).click(function(){
        $("section .rightBox").css({"display":"none"});
        $("section .rightBoxTwo").css({"display":"block"});

    });
    $("section .leftBox p").eq(2).click(function(){
        $("section .rightBox").css({"display":"block"});
        $("section .rightBoxTwo").css({"display":"none"});

    });
    $("section .leftBox p").eq(3).click(function(){
        $("section .rightBox").css({"display":"none"});
        $("section .rightBoxTwo").css({"display":"block"});

    });
    $("section .leftBox p").eq(4).click(function(){
        $("section .rightBox").css({"display":"block"});
        $("section .rightBoxTwo").css({"display":"none"});

    });
    $("section .leftBox p").eq(5).click(function(){
        $("section .rightBox").css({"display":"none"});
        $("section .rightBoxTwo").css({"display":"block"});

    });
    var str="<li><a href='#'>SEO</a></li><li><a href='#'>SEM</a></li><li class='replaces'><a href='#'>收起>></a></li>";
    $(".more").click(function(){
        $(this).replaceWith(str);
    });
    $(".replaces").click(function(){
        $(str).replaceWith("<li class='more'><a href='#'>更多>></a></li>");
    });
}