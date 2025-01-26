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
