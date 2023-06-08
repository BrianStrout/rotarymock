const imgOptions = {
  threshold: 0.45,
};

const observeForPop = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target.classlist);
    if (!entry.isIntersecting) {
      return;
    } else if (entry.isIntersecting) {
      console.log("hi");
      entry.target.classList.remove("unpopped");
    }
  });
}, imgOptions);

const observeForFade = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else if (entry.isIntersecting) {
      entry.target.classList.remove("unfaded");
    }
  });
}, imgOptions);

export { observeForPop, observeForFade };
