$(function () {
  lightbox.option({
    'alwaysShowNavOnTouchDevices': false,
    'disableScrolling': true,
    'fadeDuration': 600,
    'fitImagesInViewport': true,
    'showImageNumberLabel': false,
    'wrapAround': true,
  });
});


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
