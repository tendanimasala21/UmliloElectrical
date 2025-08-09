// You can add scroll or interaction animations here later
document.querySelector(".cta-btn").addEventListener("click", () => {
  alert("Redirect to contact section (coming soon)!");
});

document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2, // 20% of the element visible
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Sticky header background change on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.getElementById("scrollArrow");
  const sections = document.querySelectorAll("section");
  const header = document.querySelector(".site-header");
  let currentIndex = 0;

  arrow.addEventListener("click", () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= sections.length) nextIndex = 0; // loop to first

    // Get position minus header height
    const headerHeight = header.offsetHeight;
    const sectionTop = sections[nextIndex].offsetTop - headerHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });

    currentIndex = nextIndex;
  });

  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, index) => {
      if (scrollPosition >= section.offsetTop) {
        currentIndex = index;
      }
    });
  });
});


