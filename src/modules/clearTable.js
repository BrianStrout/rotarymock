import { setTable } from "./setTable.js";

const clearTable = (contentCalled) => {
  let itemsToClear = Array.from(document.querySelectorAll(`.content--shown`));

  console.log("clearing the table");
  itemsToClear.forEach((item) => {
    let random_integer = (Math.random() * (2 - 0.5 + 1)) / 4 + 0.5;
    // let rotate = random_integer * 100;
    // item.style.opacity = 0.2;
    item.style.animationDelay = `${random_integer}s`;
    // item.style.rotate = `${rotate}deg`;
    console.log(item.style);
    item.classList.add("lift--and-drop");
    item.classList.remove("content--shown");

    console.log(random_integer);
  });

  setTimeout(() => {
    itemsToClear.forEach((item) => {
      item.classList.add("transition--cover");
      item.classList.remove("lift--and-drop");
    });

    setTable(contentCalled);
  }, 2000);

  // setTimeout(() => {
  //   itemsToClear.forEach((item) => {
  //     item.classList.remove("lift--and-drop");
  //   });
  // }, 2000);
};

export { clearTable };
