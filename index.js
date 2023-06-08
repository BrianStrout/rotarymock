import { clearTable } from "./src/modules/clearTable.js";
import { tossCards } from "./src/modules/tossCards.js";
import { toggleAccordion } from "./src/modules/accordion.js";
import { observeForFade, observeForPop } from "./src/modules/int-Obs.js";
import { setTable } from "./src/modules/setTable.js";
import { timeOutWithObject } from "./src/modules/timer.js";

const accordion = document.querySelector(".accordion");

// console.log(accordion);

const object = { first: 1000, b: 2000, c: 3000 };

timeOutWithObject(object);

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  console.log(activePanel);

  if (!activePanel) return;
  toggleAccordion(activePanel);
});

let pauseForCards = 1250;

console.log("js");

setTimeout(() => {
  document.querySelector(".header").classList.remove("transition--cover");
}, 3800);

setTimeout(() => {
  document.querySelector(".site--shell").classList.remove("over--grown");
}, 6400);
setTimeout(() => {
  Array.from(document.querySelectorAll(".nav--link")).forEach((link) => {
    link.classList.remove("transition--cover");
  });
  document.querySelector(".z--pad").classList.remove("transition--cover");
}, 7800);
setTimeout(() => {
  setTable("camp");
}, 8000);

document.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  switch (e.target.id) {
    case "navcam":
      clearTable("camp");
      tossCards(pauseForCards);
      //   call("navcam");

      break;
    case "navgal":
      clearTable("gallery");
      tossCards(pauseForCards);
      //   tossCards(pauseForCards);
      //   call("navgal");
      break;
    case "navinf":
      clearTable("information");
      tossCards(pauseForCards);
      //   call("navinf");
      break;
    case "navget":
      clearTable("location");
      //   tossCards(pauseForCards);
      //   call("navget");
      break;
    case "navcon":
      clearTable("contact");
      //   tossCards(pauseForCards);
      //   call("navcon");
      break;
    case "navdon":
      clearTable("donate");
      //   tossCards(pauseForCards);
      //   call("navdon");
      break;

    case "linkin":
      window.open(
        "https://www.linkedin.com/in/carrie-thomas-bba30a4/",
        "_blank"
      );
      break;
    case "linkfb":
      window.open("https://www.strout.co", "_blank");
      break;

    case "submit":
      e.preventDefault;
      console.log("subby");
      validator();
      break;
  }
});

const popUps = document.querySelectorAll(".pop");
// console.log(popUps);
const fadeIns = document.querySelectorAll(".unfaded");

popUps.forEach((popper) => {
  observeForPop.observe(popper);
});

fadeIns.forEach((fade) => {
  observeForFade.observe(fade);
});
