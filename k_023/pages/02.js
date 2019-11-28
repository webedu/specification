function sliderChanged() {
	var delta = 0.1*parseFloat(document.getElementById("delta").value);
	var latitude = 0.1*parseFloat(document.getElementById("latitude").value);
	drawSunRail(delta, latitude);
};

document.getElementById("delta").oninput = function() {
    sliderChanged();
};
document.getElementById("latitude").oninput = function() {
    sliderChanged();
};

sliderChanged();
