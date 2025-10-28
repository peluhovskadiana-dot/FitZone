const filter_buttons = document.querySelectorAll(".filter-btn");
const trainer_cards = document.querySelectorAll(".about2 .card");
const select_trainer_buttons = document.querySelectorAll(".about2 .card .select-btn");

function displayCards(filter) {
  trainer_cards.forEach((card) => {
    card.style.display = "none";
    // відповідно до фільтру показуємо потрібні картки
    // якщо фільтр "all", показуємо всі картки
    // використати if-else
  });
}

filter_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    filter_buttons.forEach((btn) => btn.classList.remove("active"));
    // додаємо клас "active" до натиснутої кнопки
    // викликаємо displayCards з відповідним фільтром
  });
});

select_trainer_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // записати тип тренера в cookie "selected_trainer"

    alert("Trainer selected!\n You can find him at the Home page.");
  });
});
