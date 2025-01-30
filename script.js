const counters = document.querySelectorAll(".counter-number");
counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 1500; // Decrease speed by increasing the denominator
    const delay = 20; // Increase the delay to slow down the updates
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, delay); // Increased delay
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

let messageContainer = document.getElementById("messageContainer");
let btn99 = document.getElementById("btn99");
let btn999 = document.getElementById("btn999");
let btn299 = document.getElementById("btn299");

btn99.addEventListener("click", function () {
  messageContainer.textContent =
    "Hey There I am Intrested In this - BASIC PLAN (₹99)";
});

btn299.addEventListener("click", function () {
  messageContainer.textContent =
    "Hey There I am Intrested In this - MOCK TEST (₹299)";
});

btn999.addEventListener("click", function () {
  messageContainer.textContent =
    "Hey There I am Intrested In this - ULTIMATE PLAN (₹999)";
});
