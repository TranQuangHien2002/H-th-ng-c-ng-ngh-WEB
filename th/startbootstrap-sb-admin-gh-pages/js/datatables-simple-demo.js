//var tableData = fetch('https://64535a14e9ac46cedf22f43f.mockapi.io/api/first/Books').then(response => response.json()).then(data => console.log(data));
var tableData = [{ "name": "Tich Phan Ung Dung", "price": 20000, "image_link": "https://res.cloudinary.com/dgy5klrvu/image/upload/v1683252325/image_book/vat_ly_cnmxfq_v7nasd.jpg", "id": "1" }, { "name": "Vat Ly", "price": 30000, "image_link": "https://res.cloudinary.com/dgy5klrvu/image/upload/v1683252325/image_book/thoi_quen_hanh_vi_kotsyt_dexkuu.jpg", "id": "2" }, { "name": "Thoi Quen Hanh Vi", "price": 20000, "image_link": "https://res.cloudinary.com/dgy5klrvu/image/upload/v1683252325/image_book/tich_phan_ung_dung_wg3cs1_l0tjgt.jpg", "id": "3" }, { "name": "Toan Hoc", "price": 80000, "image_link": "https://res.cloudinary.com/dgy5klrvu/image/upload/v1683252325/image_book/suc_manh_phi_thuong_v0tka5_q46ese.jpg", "id": "4" }, { "name": "Suc Manh Phi Thuong", "price": 40000, "image_link": "https://res.cloudinary.com/dgy5klrvu/image/upload/v1683252325/image_book/toan_hoc_dg8jgj_h1qa4n.jpg", "id": "5" }]
for (var i in tableData) {
    var row = `<tr><td>${tableData[i].name}</td><td>${tableData[i].price}</td><td>${tableData[i].image_link}</td></tr>`;
    var table = $("#body-data");
    table.append(row);
}
window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});