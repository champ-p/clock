function dijitalSaat() {
    var dt = new Date();    // DATE() ile yeni bir tarih nesnesi oluşturuldu.
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();
    var day = dt.getDay();
    saat = complete(saat)
    dakika = complete(dakika);
    saniye = complete(saniye);

    document.getElementById('myClock').innerHTML = saat + ":" + dakika + ":" + saniye + " " + data[day]
}

function complete(data) {
    if (String(data).length < 2) {
        data = "0" + data;
    }
    return data;
}

let data = {
    "0" : "Pazar",
    "1" : "Pazartesi",
    "2" : "Salı",
    "3" : "Çarşamba",
    "4" : "Perşembe",
    "5" : "Cuma",
    "6" : "Cumartesi"
}

function upper(text) {
    let donus = ""
    text = text.split(" ")
    text.forEach(a => donus += a.charAt(0).toUpperCase() + a.slice(1).toLowerCase() + " ")
    return donus
}

let name = prompt("Adın nedir?", "Adınızı Giriniz.")
document.getElementById('myName').innerHTML = upper(name)

setInterval(() => {dijitalSaat()}, 1000);