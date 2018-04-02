var link = document.querySelector(".button-form");
      
var popup = document.querySelector(".search-form");

var dateFrom = popup.querySelector("[name=date-from]");
var dateUntil = popup.querySelector("[name=date-until]");
var adults = popup.querySelector("[name=count-adults]");
var children = popup.querySelector("[name=count-children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("search-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      if (storage) {
        adults.value = storageAdults;
        children.value = storageChildren;
      }
    }
  }
});

popup.addEventListener("submit", function (evt) {
  if (!dateFrom.value || !dateUntil.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
