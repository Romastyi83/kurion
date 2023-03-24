const burger = document.querySelector('[data-burger]');
const aside = document.querySelector('[data-aside]');
const parallax = document.querySelectorAll('[data-paralax]');
const parallax1 = document.querySelector('[data-paralax1]');
const parallax2 = document.querySelector('[data-paralax2]');

burger.addEventListener('click', () => {
  aside.classList.toggle('active');
})

if (document.documentElement.clientWidth > 1200) {
  window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    parallax1.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    parallax2.style.transform = 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)';
    parallax.forEach(el => {
      el.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    });

  });
}

