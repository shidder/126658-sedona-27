var popup = document.querySelector(".search-hotel");
var button = document.querySelector(".search-btn");
var submit = popup.querySelector(".result-btn")
var arrival = popup.querySelector("[name=arrival]");
var depature = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-close");
}
);

button.addEventListener("click", function (evt) {
  if (!popup.classList.contains("search-close")) {
    popup.classList.add("search-open");
  }
  else {
    popup.classList.remove("search-open");
    popup.classList.remove("search-error");
  }
}
);

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("search-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-error");
    console.log("Нужно заполнить все поля");
  }
});



