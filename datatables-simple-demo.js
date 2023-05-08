// window.addEventListener('DOMContentLoaded', event => {
//     // Simple-DataTables
//     // https://github.com/fiduswriter/Simple-DataTables/wiki

//     const datatablesSimple = document.getElementById('datatablesSimple');
//     if (datatablesSimple) {
//         new simpleDatatables.DataTable(datatablesSimple);
//     }
// });

fetch("https://6457c7921a4c152cf98a49bf.mockapi.io/Book").then(res => res.json()).then(data => {
    var temp = "";
    data.forEach(itemData => {
        temp += "<tr><td>" + itemData.Name + "</td><td>" + itemData.Price + '</td><td><img src="' + itemData.ImageLink + '" width=25px height=25px></td><td>' + itemData.id + "</td></tr>"
    });
    document.getElementById('dataRows').innerHTML = temp;
})