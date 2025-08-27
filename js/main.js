// Dynamic smooth scroll for mouse/keyboard navigation, including footer
(function () {
  let isScrolling = false;
  let enabled = window.innerWidth > 768;
  let wheelHandler, keyHandler;

  function getSectionsAndFooter() {
    const sections = Array.from(
      document.querySelectorAll("section.sj-section")
    );
    const footer = document.querySelector("footer");
    if (footer) sections.push(footer);
    return sections;
  }
  function scrollToSection(direction) {
    if (isScrolling) return;
    isScrolling = true;
    const sections = getSectionsAndFooter();
    const scrollY = window.scrollY;
    let nextSection = null;
    if (direction === "down") {
      nextSection = sections.find((sec) => sec.offsetTop > scrollY + 10);
    } else {
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop < scrollY - 10) {
          nextSection = sections[i];
          break;
        }
      }
    }
    if (nextSection) {
      window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    } else {
      isScrolling = false;
    }
  }
  wheelHandler = function (e) {
    if (!enabled) return;
    if (Math.abs(e.deltaY) < 10) return;
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
    const atTop = window.scrollY <= 2;
    if (e.deltaY > 0 && !atBottom) {
      scrollToSection("down");
      e.preventDefault();
    } else if (e.deltaY < 0 && !atTop) {
      scrollToSection("up");
      e.preventDefault();
    }
  };
  keyHandler = function (e) {
    if (!enabled) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      scrollToSection("down");
      e.preventDefault();
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      scrollToSection("up");
      e.preventDefault();
    }
  };
  function enableScrollSnap() {
    enabled = true;
    window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("keydown", keyHandler);
  }
  function disableScrollSnap() {
    enabled = false;
    window.removeEventListener("wheel", wheelHandler, { passive: false });
    window.removeEventListener("keydown", keyHandler);
  }
  function checkResize() {
    if (window.innerWidth > 768) {
      enableScrollSnap();
    } else {
      disableScrollSnap();
    }
  }
  document.addEventListener("DOMContentLoaded", checkResize);
  window.addEventListener("resize", checkResize);
})();
// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger menu
      const bars = navToggle.querySelectorAll(".bar");
      bars.forEach((bar) => bar.classList.toggle("active"));
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        bars.forEach((bar) => bar.classList.remove("active"));
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        bars.forEach((bar) => bar.classList.remove("active"));
      }
    });
  }

  // Smooth scrolling for navigation links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const message = formData.get("message");

      // Basic validation
      if (!name || !email || !message) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      // Simulate form submission (replace with actual form handling)
      showNotification(
        "Thank you for your application! We'll be in touch soon.",
        "success"
      );

      // Reset form
      this.reset();
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const fadeElements = document.querySelectorAll(
    ".feature, .event-card, .about-content, .membership-content"
  );
  fadeElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
      }
    });
  }
});

// Utility Functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;

  // Set background color based on type
  switch (type) {
    case "success":
      notification.style.backgroundColor = "#10b981";
      break;
    case "error":
      notification.style.backgroundColor = "#ef4444";
      break;
    default:
      notification.style.backgroundColor = "#3b82f6";
  }

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Add CSS for notifications
const notificationStyles = document.createElement("style");
notificationStyles.textContent = `
    .notification {
        font-family: 'Inter', sans-serif;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Add CSS for active hamburger menu
const hamburgerStyles = document.createElement("style");
hamburgerStyles.textContent = `
    .bar.active:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .bar.active:nth-child(2) {
        opacity: 0;
    }
    
    .bar.active:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(hamburgerStyles);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function () {
  // Navbar background logic moved here
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    }
  }
}, 10);

// Add optimized scroll listener
window.addEventListener("scroll", optimizedScrollHandler);

// Lazy loading for images (when you add real images)
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener("DOMContentLoaded", lazyLoadImages);
