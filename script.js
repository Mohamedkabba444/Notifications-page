const markAll = document.querySelector(".mark-all");
const toggleMessage1 = document.querySelector(".max-webber");
const toggleMessage2 = document.querySelector(".jacob");
const toggleMessage3 = document.querySelector(".angela-gray");
let update = document.querySelector(".update");
let resetMessage = 3;

markAll.addEventListener("click", () => {
  toggleMessage1.classList.add("toggle");
  toggleMessage2.classList.add("toggle");
  toggleMessage3.classList.add("toggle");

  resetMessage = 0;
  console.log(`resetMessage: ${update}`);
  update.innerHTML = resetMessage;
});

toggleMessage1.addEventListener("click", () => {
  toggleMessage1.classList.add("toggle");

  resetMessage -= 1;
  console.log(`resetMessage: ${update}`);
  update.innerHTML = resetMessage;
});

toggleMessage2.addEventListener("click", () => {
  toggleMessage2.classList.add("toggle");

  resetMessage -= 1;
  console.log(`resetMessage: ${update}`);
  update.innerHTML = resetMessage;
});

toggleMessage3.addEventListener("click", () => {
  toggleMessage3.classList.add("toggle");

  resetMessage -= 1;
  console.log(`resetMessage: ${update}`);
  update.innerHTML = resetMessage;
});
