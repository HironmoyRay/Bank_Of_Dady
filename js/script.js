document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;
  // console.log(email);
  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;
  // console.log(password);
  if (email === "bankofdady@gmail.com" && password === "1234") {
    window.location.href = "bank.html";
  } else {
    if (email !== "bankofdady@gmail.com") {
      alert("Please Enter Valid Email");
    } else {
      alert("Please Enter Correct Password");
    }
  }
});
