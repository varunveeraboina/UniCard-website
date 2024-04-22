window.addEventListener('scroll', function () {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the height of the section and header
  const headerHeight = document.getElementById('main-header').clientHeight;

  const introSectionHeight = document.getElementById(
    'introduction-section',
  ).clientHeight;

  const footerNode = document.getElementById('dynamic-footer');

  if (
    scrollPosition + window.screen.height / 3 >
    headerHeight + introSectionHeight
  ) {
    footerNode.className = '';
    footerNode.classList.add('opacity-100');
  } else {
    footerNode.className = '';
    footerNode.classList.add('opacity-0');
  }
});
