var getButton = document.getElementById("loginButton");

getButton.addEventListener('click', function(e) {
    if (document.getElementById("exampleInputEmail").value == "") {
        alert("Email khong duoc de trong");
        return;
    }

    if (document.getElementById("exampleInputPassword").value == "") {
        alert("Email khong duoc de trong");
        return;
    }
})