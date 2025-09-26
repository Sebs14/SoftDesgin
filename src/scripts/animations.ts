import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://easings.net
});

// Listen for the scroll event and update the scroll
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Update ScrollTrigger when Lenis scrolls
lenis.on("scroll", () => {
  ScrollTrigger.update();
});

// Export for global access
export { gsap, ScrollTrigger, lenis };

// Animation utilities
export const createParallaxEffect = (
  element: string | Element,
  speed: number = 0.5
) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const createFadeInUp = (
  elements: string | Element | Element[],
  delay: number = 0
) => {
  gsap.fromTo(
    elements,
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const createScaleIn = (
  elements: string | Element | Element[],
  delay: number = 0
) => {
  gsap.fromTo(
    elements,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: elements,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const createStaggerAnimation = (
  elements: string | Element | Element[],
  staggerDelay: number = 0.1
) => {
  gsap.fromTo(
    elements,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: staggerDelay,
      scrollTrigger: {
        trigger: elements,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const createTextReveal = (element: string | Element) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  tl.fromTo(
    element,
    {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 1.2,
      ease: "power2.inOut",
    }
  );
};

// Initialize GSAP animations
export const initAnimations = () => {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Parallax Effects
  gsap.registerPlugin(ScrollTrigger);

  // Hero parallax elements
  gsap.utils.toArray(".hero-parallax").forEach((element: any) => {
    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  });

  // Simple Text Entrance Animation
  gsap.utils.toArray(".hero-title").forEach((element: any, index) => {
    // Clean fade in animation
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Fade in animations - mejoradas
  gsap.utils.toArray(".fade-in-up").forEach((element: any, index) => {
    gsap.fromTo(
      element,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Scale in animations - mejoradas
  gsap.utils.toArray(".scale-in").forEach((element: any, index) => {
    gsap.fromTo(
      element,
      { scale: 0.6, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Stagger animations - mejoradas
  gsap.utils.toArray(".stagger-item").forEach((container: any) => {
    const items = container.children;
    gsap.fromTo(
      items,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
