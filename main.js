const number1 = document.getElementById("no1");
const number2 = document.getElementById("no2");
const number3 = document.getElementById("no3");
const number4 = document.getElementById("no4");
const number5 = document.getElementById("no5");

const numbersBox = document.getElementById("numbers");

number1.addEventListener("click", () => {
  if (
    number2.classList.contains("hovered") ||
    number3.classList.contains("hovered") ||
    number4.classList.contains("hovered") ||
    number5.classList.contains("hovered")
  ) {
    number2.classList.remove("hovered");
    number3.classList.remove("hovered");
    number4.classList.remove("hovered");
    number5.classList.remove("hovered");

    number1.classList.add("hovered");
    console.log(number1);
  } else if (number1.classList.contains("hovered")) {
    number1.classList.remove("hovered");
    console.log(number1);
  } else {
    number1.classList.add("hovered");
    console.log(number1);
  }
});

number2.addEventListener("click", () => {
  if (
    number1.classList.contains("hovered") ||
    number3.classList.contains("hovered") ||
    number4.classList.contains("hovered") ||
    number5.classList.contains("hovered")
  ) {
    number1.classList.remove("hovered");
    number3.classList.remove("hovered");
    number4.classList.remove("hovered");
    number5.classList.remove("hovered");

    number2.classList.add("hovered");
  } else if (number2.classList.contains("hovered")) {
    number2.classList.remove("hovered");
  } else {
    number2.classList.add("hovered");
  }
});

number3.addEventListener("click", () => {
  if (
    number1.classList.contains("hovered") ||
    number2.classList.contains("hovered") ||
    number4.classList.contains("hovered") ||
    number5.classList.contains("hovered")
  ) {
    number1.classList.remove("hovered");
    number2.classList.remove("hovered");
    number4.classList.remove("hovered");
    number5.classList.remove("hovered");

    number3.classList.add("hovered");
  } else if (number3.classList.contains("hovered")) {
    number3.classList.remove("hovered");
  } else {
    number3.classList.add("hovered");
  }
});

number4.addEventListener("click", () => {
  if (
    number1.classList.contains("hovered") ||
    number2.classList.contains("hovered") ||
    number3.classList.contains("hovered") ||
    number5.classList.contains("hovered")
  ) {
    number1.classList.remove("hovered");
    number2.classList.remove("hovered");
    number3.classList.remove("hovered");
    number5.classList.remove("hovered");

    number4.classList.add("hovered");
  } else if (number4.classList.contains("hovered")) {
    number4.classList.remove("hovered");
  } else {
    number4.classList.add("hovered");
  }
});

number5.addEventListener("click", () => {
  if (
    number1.classList.contains("hovered") ||
    number2.classList.contains("hovered") ||
    number3.classList.contains("hovered") ||
    number4.classList.contains("hovered")
  ) {
    number1.classList.remove("hovered");
    number2.classList.remove("hovered");
    number3.classList.remove("hovered");
    number4.classList.remove("hovered");

    number5.classList.add("hovered");
  } else if (number5.classList.contains("hovered")) {
    number5.classList.remove("hovered");
  } else {
    number5.classList.add("hovered");
  }
});

// SUBMIT:
const box = document.getElementById("box");
const submit = document.getElementById("submit");
submit.addEventListener("click", submitRating);

function submitRating() {
  if (
    !number1.classList.contains("hovered") &&
    !number2.classList.contains("hovered") &&
    !number3.classList.contains("hovered") &&
    !number4.classList.contains("hovered") &&
    !number5.classList.contains("hovered")
  ) {
    alert("Please give us a rating out of 5*");
  } else {
    let selected;
    if (number1.classList.contains("hovered")) {
      selected = number1.textContent;
      console.log(selected);
    } else if (number2.classList.contains("hovered")) {
      selected = number2.textContent;
      console.log(selected);
    } else if (number3.classList.contains("hovered")) {
      selected = number3.textContent;
      console.log(selected);
    } else if (number4.classList.contains("hovered")) {
      selected = number4.textContent;
      console.log(selected);
    } else if (number5.classList.contains("hovered")) {
      selected = number5.textContent;
      console.log(selected);
    }

    box.innerHTML = "";
    box.innerHTML = `<div id="thank-you">
    <img src="./images/illustration-thank-you.svg" alt="" />
    <div id="rating-display">You selected ${selected} out of 5 ⭐</div>
    <h2>Thank you!</h2>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>`;
  }
}
