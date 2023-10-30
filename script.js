let plusBtn = document.getElementsByClassName("fa-plus");
let minusBtn = document.getElementsByClassName("fa-minus");
let trashBtn = document.getElementsByClassName("fa-trash-can");
let card = document.getElementsByClassName("card");
let heartBtn = document.getElementsByClassName("fa-heart");

for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function () {
    if (minusBtn[i].nextElementSibling.innerHTML > 0) {
      minusBtn[i].nextElementSibling.innerHTML--;

      let prices = document.getElementsByClassName("unit-price");
      let qtites = document.getElementsByClassName("qte");
      const total = document.getElementById("total");
      // let qteOne = document.getElementById("qte-1");

      // let price = document.getElementById("price-2");
      // let qte = document.getElementById("qte-2");
      let sum = 0;
      for (let i = 0; i < prices.length; i++) {
        sum = sum + Number(prices[i].innerHTML) * Number(qtites[i].innerHTML);
      }

      total.innerHTML = sum;
    }
  });
}

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    plusBtn[i].previousElementSibling.innerHTML++;

    // let priceOne = document.getElementById("price-1");
    // let qteOne = document.getElementById("qte-1");

    // let price = document.getElementById("price-2");
    // let qte = document.getElementById("qte-2");

    // const sumOne = priceOne.innerHTML * qteOne.innerHTML;
    // const sum = price.innerHTML * qte.innerHTML;

    // console.log(sum);

    // const total = document.getElementById("total");
    // total.innerHTML = sum + sumOne;
    let prices = document.getElementsByClassName("unit-price");
    let qtites = document.getElementsByClassName("qte");
    const total = document.getElementById("total");
    // let qteOne = document.getElementById("qte-1");

    // let price = document.getElementById("price-2");
    // let qte = document.getElementById("qte-2");
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
      sum = sum + Number(prices[i].innerHTML) * Number(qtites[i].innerHTML);
    }

    total.innerHTML = sum;
  });
}

for (let trash of trashBtn) {
  trash.addEventListener("click", function () {
    trash.parentElement.parentElement.parentElement.parentElement.remove();
    let prices = document.getElementsByClassName("unit-price");
    let qtites = document.getElementsByClassName("qte");
    const total = document.getElementById("total");
    // let qteOne = document.getElementById("qte-1");

    // let price = document.getElementById("price-2");
    // let qte = document.getElementById("qte-2");
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
      sum = sum + Number(prices[i].innerHTML) * Number(qtites[i].innerHTML);
    }

    total.innerHTML = sum;
  });
}

for (const btn of heartBtn) {
  btn.addEventListener("click", function () {
    const isLiked = btn.getAttribute("isLiked");
    if (isLiked === "false") {
      btn.setAttribute("isLiked", "true");
      btn.style.color = "red";
    } else {
      btn.setAttribute("isLiked", "false");
      btn.style.color = "#1bbfe9";
    }
  });
}

function totalTwo() {}
