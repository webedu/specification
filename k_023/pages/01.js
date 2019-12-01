

var viewer = new PhotoSphereViewer({
  container: 'panorama',
  panorama: './img/panorama360.png',
  time_anim: false,
  navbar: false,
  pano_data: {
      full_width: 1925,
      full_height: 963,
      cropped_width: 1925,
      cropped_height: 421,
      cropped_x: 0,
      cropped_y: 210
  }
});
