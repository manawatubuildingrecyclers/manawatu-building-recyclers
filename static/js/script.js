// var viewer = new PhotoSphereViewer({
// 	container: 'viewer',
// 	panorama: 'path/to/panorama.jpg'
// });

$(document).on("scroll", function(){
	if ($(document).scrollTop() > 100) {
	    $("header").addClass("shrink");
	} else {
		$("header").removeClass("shrink");
	}
});
