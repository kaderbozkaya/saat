let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let Name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");

if(Name){
    myName.innerHTML = `${Name} `
}else{
    alert("Bir isim giriniz.")
    location.reload();
}
/* 
isim yazılmazsa uyarı gelicek
*/
function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}
    
    setInterval(clockFunction, 1000);

/* 
Function içerisinde date bilgimizi çektik, yukarıda tanımladığımız günler arrayini sistemin bize verdiği gün bilgisiyle eşitledik , saat dakika ve saniye bilgilerini çektik sonrasında myClock idli div içerisinde bunları gösterebilmek için tanımladık. setInterval ile fonksiyonun saniyede 1 yenilenmesini sağlayıp anlık saat bilgisine eriştik.
*/