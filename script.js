document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const myBtn = document.getElementById("myBtn");
  const message = document.getElementById("message");

  myBtn.onclick = function () {
    if (checkbox.checked) {
      message.textContent = "You are subscribed !";
    } else {
      message.textContent = "You are not subcribed !";
    }
  };
});
