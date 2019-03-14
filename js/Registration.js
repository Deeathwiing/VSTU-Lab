class User {
  constructor(
    id,
    email,
    firstName,
    lastName,
    password,
    administration,
    deleteAccountRequest
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.deleteAccountRequest = false;
    this.administration = false;
  }
}

let BDusers = [];



for (let i = 1; i <= localStorage.length; i++) {
  BDusers.push(JSON.parse(localStorage.getItem(i)));
}

$("#RegistrationBtn").on("click", function (event) {
  let email = $("#regEmail")
    .val()
    .toLowerCase();
  let firstName = $("#regFirstName")
    .val()
    .toLowerCase();
  let lastName = $("#regLastName")
    .val()
    .toLowerCase();
  let password = $("#regPassword").val();
  for (let i = 0; i < BDusers.length; i++) {
    let user = BDusers[i];

    if (
      email == user.email
    ) {
      alert("Данный email занят");
      return;
    }
  }

  if (
    (firstName &&
      lastName &&
      password) == false
  ) {
    alert("Заполните все поля");
    return;
  }
  let counter = localStorage.length;
  let id = ++counter;


  let newUser = new User(id, email, firstName, lastName, password);
  localStorage.setItem(id, JSON.stringify(newUser));
  $("#Reg").hide();

});