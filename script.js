    // Initialize Vanta.js background
    VANTA.NET({
      el: ".background-section",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x000000
    });
function downloadResume() {
    // Replace 'resume.pdf' with the actual path to your resume file
    const resumeUrl = './resume.pdf';  // You can change this URL to wherever your resume is hosted
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Krusha_SR_Resume.pdf';  // Specify the default name for the downloaded file
    link.click();
  }
    // Slide Control
    let current = 0;
    const slides = Array.from(document.querySelectorAll('.slide'));
    const navBtns = Array.from(document.querySelectorAll('.nav-btns button'));
    let isTransitioning = false;

    function showSlide(n) {
      if (isTransitioning || n < 1 || n > slides.length) return;
      isTransitioning = true;

      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === n - 1);
      });

      navBtns.forEach((btn, idx) => {
        btn.classList.toggle('focused', idx === n - 1);
        btn.setAttribute('aria-pressed', idx === n - 1 ? 'true' : 'false');
      });

      slides[n - 1].focus();
      current = n - 1;

      setTimeout(() => {
        isTransitioning = false;
      }, 300);
    }

    // Mouse Wheel Navigation
    window.addEventListener('wheel', (e) => {
      if (isTransitioning) return;
      if (e.deltaY > 0 && current < slides.length - 1) showSlide(current + 2);
      else if (e.deltaY < 0 && current > 0) showSlide(current);
    }, { passive: true });

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (isTransitioning) return;
      if (['ArrowDown', 'PageDown'].includes(e.key) && current < slides.length - 1) {
        showSlide(current + 2);
      } else if (['ArrowUp', 'PageUp'].includes(e.key) && current > 0) {
        showSlide(current);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        showSlide(parseInt(e.key));
      }
    });

    // Initialize First Slide
    showSlide(1);

    // Submit Review Button (Placeholder)
    document.querySelector('.contact-section button').addEventListener('click', () => {
      const review = document.querySelector('.contact-section textarea').value;
      if (review.trim()) {
        alert('Thank you for your feedback!');
        document.querySelector('.contact-section textarea').value = '';
      }
    });