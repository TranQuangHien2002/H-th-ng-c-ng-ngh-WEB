//Câu a
var getName = document.getElementsByClassName('name-validation--js');
// var getButton = document.getElementById('create-btn--js');

// getButton.addEventListener('click', function (e) {
//     clickNutDangKy();
// })

function clickNutDangKy() {
    if (!kiemTraHo()) {
        alert('Họ không được rỗng và không chứa các kí tự số')
        return;
    }

    if (!kiemTraTen()) {
        alert('Họ không được rỗng và không chứa các kí tự số')
        return;
    }

    if (!kiemTraEmail()) {
        alert('Email không được rỗng và phải đúng mẫu: [chuỗi]@(gmail|iuh).com');
        return;
    }

    if (kiemTraPass()) {
        alert('Mật khẩu không được trống và phải tối thiểu 8 kí tự đổ lên')
        return;
    }
    if (kiemTraPassRepeat()) {
        alert('Nhập lại mật khẩu không khớp với mật khẩu trước đó nhập')
        return;
    }
}

function kiemTraHo() {
    var text = document.getElementById('inputFirstName').value;
    return /^\D$/.test(text);
}

function kiemTraTen() {
    var text = document.getElementById('inputLastName').value;
    return /^\D$/.test(text);
}

function kiemTraEmail() {
    var text = document.getElementById('inputEmail').value;
    return /.+@(gmail|iuh)\.com/.test(text);
}

function kiemTraPass() {
    var text = document.getElementById('inputPassword').value;
    return /.{8,}/.test(text);
}

function kiemTraPassRepeat() {
    var text1 = document.getElementById('inputPassword').value;
    var text2 = document.getElementById('inputPasswordConfirm').value;
    return text1 == text2;
}
