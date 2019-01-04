window.onload = function(){
    //1、流程
    let wid=document.body.offsetWidth;
	let s1 = new Slider({
		$box:$("nav"),
		width:wid,
		height:"1.48rem",
		imgs:["../img/ban1.png","../img/ban2.png","../img/ban3.png"],
		isCircle:true,
		timeSpace:3000
    });
    $(".banner span").click(function(){
        $(this).css({"font-weight":"900","font-size":".17rem"});
        $(".banner span").not($(this)).css({"font-weight":"100","font-size":".14rem"});
    });
    $(".content .banner span").eq(0).click(function(){
        $(".content .webBox").css({"display":"block"});
        $(".content .interBox").css({"display":"none"});
    });
    $(".content .banner span").eq(1).click(function(){
        $(".content .webBox").css({"display":"none"});
        $(".content .interBox").css({"display":"block"});
    });


    // $("footer a").eq(0).click(function(){
    //     $(this).css({"color":"#00aaee"});
    //     $("footer a").eq(1).css({"color":"#848484"});
    //     $("footer a").eq(2).css({"color":"#848484"});
    //     $("footer a").eq(3).css({"color":"#848484"});
    // });
    // $("footer a").eq(1).click(function(){
    //     $("footer a").eq(1).css({"color":"#00aaee"});
    //     $("footer a").eq(0).css({"color":"#848484"});
    //     $("footer a").eq(1).css({"color":"#848484"});
    //     $("footer a").eq(2).css({"color":"#848484"});
    // });

}