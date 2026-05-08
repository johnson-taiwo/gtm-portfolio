document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('active');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -100px 0px' });

  document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

  // Mobile menu
  const toggle = document.getElementById('mobileMenuToggle');
  const overlay = document.getElementById('mobileMenuOverlay');
  const close = document.getElementById('closeMenu');

  if (toggle && overlay && close) {
    let savedScrollY = 0;

    toggle.addEventListener('click', () => {
      savedScrollY = window.scrollY;
      overlay.classList.add('active');
      document.body.classList.add('menu-open');
      document.body.style.top = `-${savedScrollY}px`;
    });

    const hide = () => {
      overlay.classList.remove('active');
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo(0, savedScrollY);
    };

    close.addEventListener('click', hide);
    document.querySelectorAll('.mobile-nav-links a').forEach(a =>
      a.addEventListener('click', hide)
    );
  }

  // Screenshot lightbox
  const screenshots = document.querySelectorAll('.cs-screenshots-grid img');
  if (screenshots.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">✕</button><img alt="">';
    document.body.appendChild(lightbox);

    const lbImg = lightbox.querySelector('img');
    const lbClose = lightbox.querySelector('.lightbox-close');

    const open = (src, alt) => {
      lbImg.src = src;
      lbImg.alt = alt || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
      lbImg.src = '';
    };

    screenshots.forEach(img => {
      img.addEventListener('click', () => open(img.src, img.alt));
    });

    lightbox.addEventListener('click', e => {
      if (e.target === lbImg) return; // clicking the image itself doesn't close
      close();
    });
    lbClose.addEventListener('click', close);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) close();
    });
  }
});
