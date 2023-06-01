const setTable = (contentCalled) => {
  let itemsToPost = Array.from(document.querySelectorAll(`.${contentCalled}`));
  console.log(itemsToPost);

  itemsToPost.forEach((item) => {
    // item.classList.add("transition--cover");
    item.classList.add("content--shown");
  });

  setTimeout(() => {
    itemsToPost.forEach((item) => {
      item.classList.remove("transition--cover");
    });
  }, 2000);

  //   console.log("clearing the table");
  //   itemsToClear.forEach((item) => {
  //     item.classList.add("lift--and-drop");
  //   });

  //   setTimeout(() => {
  //     itemsToClear.forEach((item) => {
  //       item.classList.add("transition--cover");
  //     });
  //   }, 2000);

  //   setTimeout(() => {
  //     itemsToClear.forEach((item) => {
  //       item.classList.remove("lift--and-drop");
  //     });
  //   }, 5000);
  // };
  console.log("set the table with" + contentCalled);
};
export { setTable };
