document.getElementById("LoginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Reseting error message
  document.getElementById("error-message1").innerText = "";
  document.getElementById("error-message2").innerText = "";
  document.getElementById("error-message3").innerText = "";
  document.getElementById("error-message4").innerText = "";

  // Get form values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value.trim();


  //username validation

  if (!username || username === "") {
    document.getElementById("error-message1").innerText = "Username cannot be null or blank";
    document.getElementById("error-message1").style.visibility="visible";
    return;
  }

  if (/\s/.test(username)) {
    document.getElementById("error-message1").innerText = "Username cannot contain spaces";
    document.getElementById("error-message1").style.visibility="visible";
    return;
  }

  if (!/^[a-zA-Z]+$/.test(username)) {
    document.getElementById("error-message1").innerText = "Username can only contain alphabetic characters";
    document.getElementById("error-message1").style.visibility="visible";
    return;
  }

  // Password validation

  
  if (!password || password === "") {
    document.getElementById("error-message2").innerText= "Password cannot be null or blank";
    document.getElementById("error-message2").style.visibility="visible";
    return;
  }

  if (password.length<5) {
    document.getElementById("error-message2").innerText= "Password should be more than 5 characters";
    document.getElementById("error-message2").style.visibility="visible";
    return;
  }

  // Password validation: check if password contains at least one special character
  if (!/[^A-Za-z0-9]/.test(password)) {
    document.getElementById("error-message2").innerText = "Password must contain at least one special character";
    document.getElementById("error-message2").style.visibility="visible";
    return;
  }

  // Password validation: check if password contains only numbers
  if (/^\d+$/.test(password)) {
    document.getElementById("error-message2").innerText = "Password must contain at least one non-numeric character";
    document.getElementById("error-message2").style.visibility="visible";
    return;
  }

  // Password validation: check if password contains any whitespace characters
  if (/\s/.test(password)) {
    document.getElementById("error-message2").innerText = "Password cannot contain blank spaces";
    document.getElementById("error-message2").style.visibility="visible";
    return;
  }
  //confirming password
  if (password !== confirmPassword) {
    document.getElementById("error-message3").innerText = "Passwords do not match";
    document.getElementById("error-message3").style.visibility="visible";
    return;
  }

  //email validation
  var emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  if (!emailValidate.test(email)) {
    document.getElementById("error-message4").innerText = "Invalid email address";
    return;
  }

  // Your additional constraints/validation logic goes here

  // If all validations pass, show success message and redirect to a new page
  //alert("Login successful!");
  window.location.href = "home_page.html";
});

