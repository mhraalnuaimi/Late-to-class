// wait for the page to load
document.addEventListener("DOMContentLoaded", () => {

  // select all bios
  const bios = document.querySelectorAll(".bio");

  // add hover effect for each bio
  bios.forEach(bio => {
    const fact = bio.getAttribute("data-fact");

    // show fun fact on mouse enter
    bio.addEventListener("mouseenter", () => {
      const factBox = document.createElement("p");
      factBox.classList.add("fun-fact");
      factBox.textContent = fact;
      bio.appendChild(factBox);
    });

    // remove fun fact on mouse leave
    bio.addEventListener("mouseleave", () => {
      const factBox = bio.querySelector(".fun-fact");
      if (factBox) factBox.remove();
    });
  });

  // interactive hero background
  const hero = document.querySelector(".hero");

  if(hero) {
    document.addEventListener("mousemove", e => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = e.clientX / width;
      const y = e.clientY / height;

      // subtle gradient shift based on mouse position
      hero.style.background = `linear-gradient(to right, rgba(255, 214, 230, ${0.8 + x*0.2}), rgba(255, 230, 245, ${0.8 + y*0.2}))`;
    });
  }

});


