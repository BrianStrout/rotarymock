const timeOutWithObject = (collection) => {
  // let length=Object.keys(collection).length;

  for (const property in collection) {
    // console.log(`${property}:.... ${collection[property]}`);

    setTimeout(() => {
      console.log(`${property}`);
    }, `${collection[property]}`);
  }
};

export { timeOutWithObject };
