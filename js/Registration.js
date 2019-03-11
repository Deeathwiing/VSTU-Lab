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
let regEmail = $("#regEmail")
  .val()
  .toLowerCase();
let regFirstName = $("#regFirstName")
  .val()
  .toLowerCase();
let regLastName = $("#regLastName")
  .val()
  .toLowerCase();
let regPassword = $("#regPassword").val();


for (let i = 1; i <= localStorage.length; i++) {
  BDusers.push(JSON.parse(localStorage.getItem(i)));
}

for (let i = 0; i < BDusers.length; i++) {
  let user = BDusers[i];
}

$("#RegistrationBtn").on("click", function (event) {
  for (let i = 0; i < BDusers.length; i++) {
    var user = BDusers[i];

    if (
      regEmail == user.email
    ) {
      alert("Данный email занят");
      return;
    }
  }

  if (
    (regFirstName &&
      regLastName &&
      regPassword) == false
  ) {
    alert("Заполните все поля");
    return;
  }
  let counter = localStorage.length;
  let id = ++counter;

  let email = regEmail;
  let firstName = regFirstName;
  let lastName = regLastName;
  let password = regPassword;

  let newUser = new User(id, email, firstName, lastName, password);
  localStorage.setItem(id, JSON.stringify(newUser));
  $("#Reg").hide();

});