document.getElementById("submit-button").addEventListener("click", () => {
  validateEmail();
});

function validateEmail() {
  const userEmail = document.getElementById("email").value;
  const toolTip = document.getElementById("emailHelp");
  const errorIcon = document.getElementById("error-icon");
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(userEmail) == false) {
    errorIcon.classList.add("icon-error-visible");
    toolTip.innerHTML = "Please provide a valid email address";
    resetform();
    return false;
  } else {
    errorIcon.classList.remove("icon-error-visible");
    toolTip.innerHTML = "Thanks! You will be notified when the site launches!";
    return true;
  }
}

const emailInput = document.getElementById("email");

emailInput.addEventListener(
  "focus",
  function () {
    if (emailInput.focus) {
      document.getElementById("emailHelp").innerHTML = "";
      document
        .getElementById("error-icon")
        .classList.remove("icon-error-visible");
      document
        .getElementById("error-icon")
        .classList.add("icon-error-invisible");
    }
  },
  false
);
