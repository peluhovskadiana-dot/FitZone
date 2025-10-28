const seeMyCoachButton = document.querySelector(".see-my-coach");
seeMyCoachButton.addEventListener("click", () => {
  let location = "coach/not_found.html";

  const selectedTrainer = document.cookie
    .split("; ")
    .find((row) => row.startsWith("selected_trainer="))
    ?.split("=")[1];

  // змінювати location відповідно до вибраного тренера SelectedTrainer
  // якщо selectedTrainer дорівнює "trainer1", location = "coach/trainer1.html"
  // можна використати if-else або switch

  if(selectedTrainer ==="fitness"){
          location = "coach/about1.html";
    } else if(selectedTrainer ==="crossfit"){
      location = "coach/about2.html";
    } else if(selectedTrainer ==="nutrition"){
      location = "coach/about3.html";
    }

  window.location.href = location;
});
