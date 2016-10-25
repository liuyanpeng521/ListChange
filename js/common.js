$(function() {
		$(".content_part03>.part03_title>ul>li").click(function(){
			$(this).parents("ul").find("a").removeClass("on");
			$(this).find("a").addClass("on");
			var index = $(this).index();
			//直接显示隐藏①
			$(this).parents(".content_part03").find(".lunWen").hide();
		    $(this).parents(".content_part03").find(".lunWen").eq(index).show();
			
			//直接显示隐藏②
			//$(this).parents(".content_part03").find(".lunWen").css("display","none");
			//$(this).parents(".content_part03").find(".lunWen").eq(index).css("display","block");
			
			//淡入淡出显示和隐藏
			//$(this).parents(".content_part03").find(".lunWen").fadeOut(3000);
			//$(this).parents(".content_part03").find(".lunWen").eq(index).fadeIn(3000);
			
			//滑动显示和隐藏
			//$(this).parents(".content_part03").find(".lunWen").slideUp()
			//$(this).parents(".content_part03").find(".lunWen").eq(index).slideDown();
		});
	});
