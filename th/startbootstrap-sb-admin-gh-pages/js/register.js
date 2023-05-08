function eventKTHo() {
    var text = document.getElementById("inputFirstName").value;
    if (!/^\D+$/.test(text)) {
        alert("Nhập ho khong duoc rong va khong duoc nhap so")
        return false;
    }
    return true;
}

function eventKTTen() {
    var text = document.getElementById("inputLastName").value;
    if (!/^\D+$/.test(text)) {
        alert("Nhập ten khong duoc rong va khong duoc nhap so")
        return false;
    }
    return true;
}

function eventKTEmail() {
    var text = document.getElementById("inputEmail").value;
    if (!/.+@gmail.com/.test(text)) {
        alert("Nhap Email khong duoc rong va phai nhap email")
        return false;
    }
    return true;
}

function eventKTMatKhau() {
    var text = document.getElementById("inputPassword").value;
    if (!/.{6,}/.test(text)) {
        alert("Nhập mat khau khong duoc rong va 6 ky tu tro len")
        return false;
    }
    return true;
}

function eventKTMatKhauLai() {
    var text1 = document.getElementById("inputPassword").value;
    var text2 = document.getElementById("inputPasswordConfirm").value;
    if (text1 != text2) {
        alert("Nhập lai mat khau khong duoc rong va khong duoc khac mau khau da nhap")
        return false;
    }
    return true;
}

function eventDangKy() {

    if (!eventKTHo()) return;
    if (!eventKTTen()) return;
    if (!eventKTEmail()) return;
    if (!eventKTMatKhau()) return;
    if (!eventKTMatKhauLai()) return;
    window.location.href = "login.html";
}