let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let ucgen = document.querySelector(".z")
let btns = document.querySelectorAll(".kagit button");
let hareketler = [btn, btn1, btn2];
let rastgele = Math.round(Math.random() * 3);
let bilgisayarHamlesi = hareketler[rastgele];
let sonucText = document.querySelector(".sonuc-te");
let bilgisayarHamlesiDiv = document.querySelector(".bilgisayar-hamlesi");
let secimHamlesiDiv = document.querySelector(".secim-hamlesi");
let score = document.querySelector("#win-puan");
let xxx = document.querySelector(".oyunnn");
let yeniOyun = document.querySelector(".reset");
let hamleSayisi = document.querySelector("#oyun-sayi");
let winWinSayisi = document.querySelector("#win-win");
let kayipSayisi = document.querySelector("#kayip-sayi");
let rulesBtn = document.querySelector("#rules-tik");
let rulesKural = document.querySelector(".rules-tab")
let span = document.querySelector("#span");
let body = document.querySelector(".container");


span.onclick = function() {
  rulesKural.style.display = "none";
}

rulesBtn.onclick = function() {
  rulesKural.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == body) {
      rulesKural.style.display = "none";
  }
}
let puan = 0;
let win = 0;
let kayip = 0;


btn.addEventListener("click", () => {
  xxx.style.display = "block";
  ucgen.style.display = "none";
  btn.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  secimHamlesiDiv.innerHTML = btn.innerHTML;
  bilgisayarHamlesiDiv.innerHTML = bilgisayarHamlesi.innerHTML;
  if (btn.innerHTML === bilgisayarHamlesi.innerHTML) {
    sonucText.innerHTML = 'Berabere';
    win++;
    winWinSayisi.innerText = win;
  } else if (btn.innerHTML === btn2.innerHTML && bilgisayarHamlesi.innerHTML === btn1.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else if (btn.innerHTML === btn1.innerHTML && bilgisayarHamlesi.innerHTML === btn.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else if (btn.innerHTML === btn.innerHTML && bilgisayarHamlesi.innerHTML === btn2.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else {
    sonucText.innerHTML = 'Oyuncu Kaybetti';
    kayip++;
    kayipSayisi.innerText = kayip;
  }

});
// arrow function 
btn1.addEventListener("click", () => {
  xxx.style.display = "block";
  ucgen.style.display = "none";
  btn.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  secimHamlesiDiv.innerHTML = btn1.innerHTML;
  bilgisayarHamlesiDiv.innerHTML = bilgisayarHamlesi.innerHTML;
  if (btn1.innerHTML === bilgisayarHamlesi.innerHTML) {
    sonucText.innerHTML = 'Berabere';
    win++;
    winWinSayisi.innerText = win;
  } else if (btn1.innerHTML === btn2.innerHTML && bilgisayarHamlesi.innerHTML === btn1.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else if (btn1.innerHTML === btn1.innerHTML && bilgisayarHamlesi.innerHTML === btn.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else if (btn1.innerHTML === btn.innerHTML && bilgisayarHamlesi.innerHTML === btn2.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else {
    sonucText.innerHTML = 'Oyuncu Kaybetti';
    kayip++;
    kayipSayisi.innerText = kayip;
  }
});

btn2.addEventListener("click", () => {
  xxx.style.display = "block";
  ucgen.style.display = "none";
  btn.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  secimHamlesiDiv.innerHTML = btn2.innerHTML;
  bilgisayarHamlesiDiv.innerHTML = bilgisayarHamlesi.innerHTML;
  if (btn2.innerHTML === bilgisayarHamlesi.innerHTML) {
    sonucText.innerHTML = 'Berabere';
    win++;
    winWinSayisi.innerText = win;
  } else if (btn2.innerHTML === btn2.innerHTML && bilgisayarHamlesi.innerHTML === btn1.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else if (btn2.innerHTML === btn1.innerHTML && bilgisayarHamlesi.innerHTML === btn.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else if (btn2.innerHTML === btn.innerHTML && bilgisayarHamlesi.innerHTML === btn2.innerHTML) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else {
    sonucText.innerHTML = 'Oyuncu Kaybetti';
    kayip++;
    kayipSayisi.innerText = kayip;
  }
});

yeniOyun.addEventListener('click', yeniv2);


let sayac = 0;

function yeniv2() {
  hamleSayisi.innerText = sayac++;
  puan;
  win;
  kayip;
  score.innerText = puan;
  winWinSayisi.innerText = win;
  kayipSayisi.innerText = kayip;
  xxx.style.display = "none";
  ucgen.style.display = "block";
  btn.style.display = "inline-block";
  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";
  let rastgele1 = Math.round(Math.random() * 3);
  bilgisayarHamlesi = hareketler[rastgele1];
}