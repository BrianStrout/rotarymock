import { clearTable } from "./src/modules/clearTable.js";
import { tossCards } from "./src/modules/tossCards.js";
import { toggleAccordion } from "./src/modules/accordion.js";
import { observeForFade, observeForPop } from "./src/modules/int-Obs.js";

const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

let pauseForCards = 1250;

console.log("js");

setTimeout(() => {
  Array.from(document.querySelectorAll(".nav--link")).forEach((link) => {
    link.classList.remove("transition--cover");
  });
}, 1000);

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
