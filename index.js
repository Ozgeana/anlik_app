//kullanicidan isim bilgisi almak
let userName = prompt("Lutfen adinizi giriniz...")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} <strong>${userName}</strong>`

function dateClock(){
var date = new Date().toLocaleString('tr-TR');
document.getElementById('myClock').innerHTML = date;
}
setInterval(dateClock, 1000)