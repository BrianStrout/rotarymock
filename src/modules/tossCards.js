const cardTable = document.getElementById("cardTable");

const tossCards = (delay) => {
  setTimeout(() => {
    let card1 = document.createElement("div");
    card1.classList.add("cardL");
    // card1.innerHTML = "Summer";
    cardTable.appendChild(card1);

    let card1Inner = document.createElement("div");
    card1Inner.classList.add("cardL--inner");
    card1Inner.innerHTML = "";
    card1.appendChild(card1Inner);
    let card1InnerW = document.createElement("h3");
    // card1InnerW.classList.add("cardL--inner");
    card1InnerW.innerHTML = "Summer @ Rotary!";
    card1.appendChild(card1InnerW);

    let card2 = document.createElement("div");
    card2.classList.add("cardR");
    card2.innerHTML = "";
    cardTable.appendChild(card2);
    let card2Inner = document.createElement("div");
    card2Inner.classList.add("cardR--inner");
    card2Inner.innerHTML = "photo";
    card2.appendChild(card2Inner);
    let card2InnerW = document.createElement("h3");
    // card2InnerW.classList.add("cardL--inner");
    card2InnerW.innerHTML = "Rotary Friends!";
    card2.appendChild(card2InnerW);
  }, delay);
};

export { tossCards };
