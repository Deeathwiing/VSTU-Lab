var usersBase = [];
var checklogin = false;
var admin = false;


for (let i = 0; i <= localStorage.length; i++) {
    usersBase.push(JSON.parse(localStorage.getItem(i)));
}

$("#login").on("click", function (event) {

    for (let i = 0; i < BDusers.length; i++) {

        var users = BDusers[i];

        if (($("#logEmail")
                .val()
                .toLowerCase() == users.email) && ($("#logPass")
                .val() == users.password)) {

            $(".removeAfterReg").hide();
            $(".PersonalArea").removeClass("d-none");
            checklogin = true;
            if (users.administration) {
                admin = true;
            }
        }

    }
    if (!checklogin) {
        alert("Введите правильный email и пароль")
    }

    if (admin) {
        $(".linkAdmin").removeClass("d-none");
    }

});

for (let i = 1; i < usersBase.length; i++) {
    var userId = usersBase[i];



    $("#adminTable").append(`
               <tr>
                <th scope="row">${userId.id}</th>
                <td>${userId.firstName}</td>
                <td>${userId.lastName}</td>
                <td>${userId.email}</td>
                <td>${userId.deleteAccountRequest}</td>
              </tr>
`)

}