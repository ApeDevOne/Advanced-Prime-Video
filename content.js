
var xRayElements = document.getElementsByClassName('xrayQuickView');
var overlayElements = document.getElementsByClassName('fkpovp9');

for (var i = 0; i < xRayElements.length; i++) {
    var xRay = xRayElements[i];
    if (xRay.style.display === 'none') {
        xRay.style.display = 'block';
    } else {
        xRay.style.display = 'none';
    }
}

for (var i = 0; i < overlayElements.length; i++) {
    var overlay = overlayElements[i];
    if (overlay.style.display === 'none') {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

document.addEventListener('keydown', function(event) {
  const video = document.querySelector('video');
  if (!video) return;

  switch (event.key) {
    case ',':
      video.currentTime -= 5;
      break;
    case '.':
      video.currentTime += 5;
      break;
  }
});
