var getRegisterAccount = document.getElementById('registerAccount');

getRegisterAccount.addEventListener('click', function(e) {
    kiemTraRangBuoc();
})

function kiemTraRangBuoc() {
    //Kiem tra FirstName
    if (/\D/.test(document.getElementById("exampleFirstName").value) == false) {
        alert('First name khong duoc chua ki tu so hoac bo trong');
        return;
    }

    //Kiem tra LastName
    if (/\D/.test(document.getElementById("exampleLastName").value) == false) {
        alert('Last name khong duoc chua ki tu so hoac bo trong');
        return;
    }

    //Kiem tra Email
    if (/(.)+@gmail.com/.test(document.getElementById("exampleInputEmail").value) == false) {
        alert("Email khong duoc de trong va phai tuan theo cu phap [ten gmail]@gmail.com");
        return;
    }

    //Kiem tra Password:
    if (/.{6,}/.test(document.getElementById("exampleInputPassword").value) == false) {
        alert("Mat khau phai toi thieu 6 ki tu do len va khong duoc bo trong");
        return;
    }

    //Kiem tra Repeat Password:
    var pass1 = document.getElementById("exampleInputPassword").value;
    var pass2 = document.getElementById("exampleRepeatPassword").value;

    if (pass1 != pass2) {
        alert("Nhap lai mat khau phai khop voi mat khau nhap truoc do");
        return;
    }
}