const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// handle Road form submit

const BASE_URL = "http://localhost:3000";

const submitBtnEl = document.getElementById("submit-btn");
submitBtnEl.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  // select all input fields one by one
  const road = document.getElementById("roadName").value;
  const direction = document.getElementById("roadDirection").value;
  const location = document.getElementById("location").value;
  const kind = document.getElementById("carType").value;
  const camId = document.getElementById("camId").value;
  const date = document.getElementById("date").value;

  // create an object to store all the values
  const carData = {
    road,
    direction,
    location,
    kind,
    camId,
    date,
  };

  // make a post request to the server
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  };


  fetch(`${BASE_URL}/addCar`, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  // // get request to the server
  // fetch("http://localhost:3000/")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.error(err));

  // // clear the input fields
  // const inputs = document.querySelectorAll("input");
  // inputs.forEach((input) => (input.value = ""));

}
