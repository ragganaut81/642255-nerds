var link = document.querySelector(".button-contacts");

var popup = document.querySelector(".modal-write-us");

var close = popup.querySelector(".modal-close");

var userName = popup.querySelector(".user-name");

var form = popup.querySelector("form");

var email = popup.querySelector(".user-email");

var review = popup.querySelector(".review-text");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
storageName = localStorage.getItem("user-name");
storageEmail = localStorage.getItem("user-email");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-show");

if (storageName && storageEmail) {
  userName.value = storageName;
  email.value = storageEmail;
  review.focus();
} else if (storageEmail) {
  email.value = storageEmail;
  userName.focus();
} else if (storageName) {
  userName.value = storageName;
  email.focus();
} else {
  userName.focus();
}
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-show");
popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
if (!userName.value || !email.value || !review.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  if (!userName.value) {
    userName.focus();
  } else if (!email.value) {
    email.focus();
  } else {
    review.focus();
  }
} else {
  if (isStorageSupport) {
  localStorage.setItem("user-name", userName.value);
  localStorage.setItem("user-email", email.value);
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});