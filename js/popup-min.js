var link=document.querySelector(".button-contacts"),popup=document.querySelector(".modal-write-us"),close=popup.querySelector(".modal-close"),userName=popup.querySelector(".user-name"),form=popup.querySelector("form"),email=popup.querySelector(".user-email"),review=popup.querySelector(".review-text"),isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("user-name"),storageEmail=localStorage.getItem("user-email")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storageName&&storageEmail?(userName.value=storageName,email.value=storageEmail,review.focus()):storageEmail?(email.value=storageEmail,userName.focus()):storageName?(userName.value=storageName,email.focus()):userName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){userName.value&&email.value&&review.value?isStorageSupport&&(localStorage.setItem("user-name",userName.value),localStorage.setItem("user-email",email.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,userName.value?email.value?review.focus():email.focus():userName.focus())}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});