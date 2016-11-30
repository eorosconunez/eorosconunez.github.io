$(document).ready(function() {

	$(".picture").click(function() {
		$("#overlay").show();
		$(this).addClass("pic-click");
	});
	
	$("#overlay").click(function() {
		$(this).hide();
		$(".picture").removeClass("pic-click");
	})


	$("#sidebar-button").click(function(){
  if($("#sidebar-button").hasClass("button-active")){
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
  } else {

    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    $(".page-wrapper").addClass("wrapper-active");
    setTimeout(function() {
    $('body').addClass('no-scroll');
    }, 300);
  }

  $(".page-wrapper").click(function(){
  if ($("#sidebar-button").hasClass("button-active")){
    $("body").removeClass("no-scroll");
    $(".sidebar-container").removeClass("sidebar-active");
    $("#sidebar-button").removeClass("button-active");
    $(".page-wrapper").removeClass("wrapper-active")
  }
})
})

});