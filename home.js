const seeMyCoachButton = document.querySelector(".see-my-coach");
seeMyCoachButton.addEventListener("click", () => {
  let location = "coach/not_found.html";

  const selectedTrainer = document.cookie
    .split("; ")
    .find((row) => row.startsWith("selected_trainer="))
    ?.split("=")[1];

  switch (selectedTrainer) {
    case "fitness":
      location = "coach/about1.html";
      break;
    case "crossfit":
      location = "coach/about2.html";
      break;
    case "nutrition":
      location = "coach/about3.html";
      break;
  }

  window.location.href = location;
});
