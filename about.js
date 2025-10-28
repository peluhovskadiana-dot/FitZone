const filter_buttons = document.querySelectorAll(".filter-btn");
const trainer_cards = document.querySelectorAll(".about2 .card");
const select_trainer_buttons = document.querySelectorAll(".about2 .card .select-btn");

function displayCards(filter) {
  trainer_cards.forEach((card) => {
    card.style.display = "none";
    if (filter == "all" || card.dataset.speciality == filter) {
      card.style.display = "block";
    }
  });
}

filter_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    filter_buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    displayCards(button.dataset.filter);

  });
});

select_trainer_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // записати тип тренера в cookie "selected_trainer"

    alert("Trainer selected!\n You can find him at the Home page.");
  });
});
