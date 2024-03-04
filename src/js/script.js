// Navbar
const toggleMenu = document.getElementById('toggleMenu');
const mobileMenu = document.getElementById('mobileMenu');

toggleMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const header = document.querySelector('header');
const serviceSection = document.getElementById('about');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    header.classList.toggle('sticky', scrollPosition > 0);
    header.style.backgroundColor = 'rgba(0,0,0,0.4)';
  } else {
    header.style.backgroundColor = 'transparent';
  }

  const serviceSectionTop = serviceSection.offsetTop;

  if (scrollPosition > serviceSectionTop) {
    header.style.backgroundColor = 'rgb(23,33,42)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// typing
const typed = new Typed('#typing', {
  strings: ['DIGIJOCKEYS'],
  typeSpeed: 150,
  showCursor: false,
});

const typed2 = new Typed('#typing2', {
  strings: ['Digital Solution'],
  typeSpeed: 100,
  backSpeed: 50,
  startDelay: 2600,
  loop: true,
  showCursor: false,
});
