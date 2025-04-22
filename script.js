// Scroll reveal
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');
  for (let reveal of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const visiblePoint = 150;

    if (elementTop < windowHeight - visiblePoint) {
      reveal.classList.add('active');
    }
  }
});
