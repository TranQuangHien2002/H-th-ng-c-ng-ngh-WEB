function eventKTHO() {
    var text = document.getElementById("inputFirstName").value;
    if (!/^\D+$/.test(text)) {
        alert('Khong duoc rong va ko dc chứa kí tự số')
        return false;
    }
    return true;
}

function eventKTTEN() {
    var text = document.getElementById("inputLastName").value;
    if (!/^\D+$/.text) {
        alert('Khong duoc rong va ko dc chứa kí tự số')
        return false;
    }
    return true;
}

function eventKTEmail() {
    var text = document.getElementById("inputEmail").value;
    if (!/.+@gamil.com/.test(text)) {
        alert("Khong dc rong va phai phu hop")
        return false;
    }
    return true;
}

function eventKTPASS() {
    var text = document.getElementById("inputPassword").value;
    if (!/.{6,}/.test(text)) {
        alert("Khong dc rong va toi thieu phai 6 kí tự")
        return false;
    }
    return true;
}

function eventKTPASSC() {
    var text1 = document.getElementById("inputPassword").value;
    var text2 = document.getElementById("inputPasswordConfirm").value;

    if (!(text1 == text2)) {
        alert('Khong đc khac')
        return false;
    }
    return true;
}

function enventDangKy() {
    if (!eventKTHO()) return;
    if (!eventKTTEN()) return;
    if (!eventKTEmail()) return;
    if (!eventKTPASS()) return;
    if (!eventKTPASSC()) return;
    window.location.href = "login.html"
}