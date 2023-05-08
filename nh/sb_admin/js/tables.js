fetch("https://64589a174eb3f674df780f70.mockapi.io/ac").then(res => res.json()).then(data => {
    var temp = "";
    data.forEach(itemData => {
        temp += "<tr><td>" + itemData.username + "</td><td>" + itemData.email + '</td><td><img src="' + itemData.imagelink + '" width=25px height=25px></td><td>' + itemData.id + "</td></tr>"
    });
    document.getElementById('dataRows').innerHTML = temp;
})