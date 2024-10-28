// Counter Animation
document.addEventListener("DOMContentLoaded", function () {
  const counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = j;
      counter3.appendChild(div);
    }
  }

  const finalDiv = document.createElement("div");
  finalDiv.className = "num";
  finalDiv.textContent = "0";
  counter3.appendChild(finalDiv);

  function animate(counter, duration, delay = 0) {
    const numHeight = counter.querySelector(".num").clientHeight;
    const totalDistance =
      (counter.querySelectorAll(".num").length - 1) * numHeight;

    gsap.to(counter, {
      y: -totalDistance,
      duration: duration,
      delay: delay,
      ease: "power3.inOut",
    });
  }

  animate(counter3, 5);
  animate(document.querySelector(".counter-2"), 6);
  animate(document.querySelector(".counter-1"), 2, 4);
});

// PreLoader Animation
let load_animation = gsap.timeline();

load_animation.to(".digit", {
  top: "-150px",
  stagger: {
    amount: 0.25,
  },
  delay: 6,
  duration: 1,
  ease: "power4.inOut",
});

load_animation.to(".loading-screen", {
  height: "0px",
  duration: 0.3,
  delay: 0.1,
  stagger: -0.3,
});

// Navbar Animation
load_animation.from("#web_logo", {
  y: -60,
  opacity: 0,
  delay: 0.5,
});

load_animation.from(".link", {
  y: -60,
  opacity: 0,
  delay: 0.1,
  stagger: -0.1,
});

// Cursor Animation
let website_content = document.querySelector(".website-content");
let cursor = document.querySelector(".cursor");

website_content.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x - 25,
    y: dets.y - 25,
    duration: 0.7,
    ease: "power4.out",
  });
});
