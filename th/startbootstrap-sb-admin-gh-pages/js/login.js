function eventDangNhap() {
    if (!eventKTEmail()) return;
    if (!eventKTMatKhau()) return;
    window.location.href = "tables.html";
}

function eventKTMatKhau() {
    var text = document.getElementById("inputPassword").value;
    if ((text.trim() == "")) {
        alert("Mat khau khong duoc rong");
        return false;
    }
    return true;
}

function eventKTEmail() {
    var text = document.getElementById("inputEmail").value;
    if ((text.trim() == "")) {
        alert("Email khong duoc rong")
        return false;
    }
    return true;
}