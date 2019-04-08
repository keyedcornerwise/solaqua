jQuery(function($){
$(window).bind('scroll', function() {
var windowHeight = $(window).height();
if ($(window).scrollTop() < windowHeight) {
$("nav.dp").css("position","absolute").css("top","auto").css("bottom",0);
$("li.dropdown").removeClass("dropdown").addClass("dropup");
}
else {
$("nav.dp").css("position","fixed").css("bottom","auto").css("top",0);
$("li.dropup").removeClass("dropup").addClass("dropdown");
}
});
});
