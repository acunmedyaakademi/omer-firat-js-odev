let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let ucgen = document.querySelector(".z");
let btns = document.querySelectorAll(".kagit button");
let hareketler = [btn, btn1, btn2];
let sonucText = document.querySelector(".sonuc-te");
let bilgisayarHamlesiDiv = document.querySelector(".bilgisayar-hamlesi");
let secimHamlesiDiv = document.querySelector(".secim-hamlesi");
let score = document.querySelector("#scor");
let xxx = document.querySelector(".oyunnn");
let yeniOyun = document.querySelector(".reset");

let puan = 0;

btn.addEventListener("click", () => {oyun(btn)});
btn1.addEventListener("click", () => {oyun(btn1)});
btn2.addEventListener("click", () => {oyun(btn2)});

function oyun(secim) {
  xxx.style.display = "block";
  ucgen.style.display = "none";
  btn.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  let bilgisayarHamlesi = hareketler[Math.round(Math.random() * 2)];
  secimHamlesiDiv.innerHTML = secim.innerHTML;
  bilgisayarHamlesiDiv.innerHTML = bilgisayarHamlesi.innerHTML;
  if (secim.innerHTML === bilgisayarHamlesi.innerHTML) {
    sonucText.innerHTML = 'Berabere';
  } else if (
    (secim === btn && bilgisayarHamlesi === btn2) && (secim === btn1 && bilgisayarHamlesi === btn) && (secim === btn2 && bilgisayarHamlesi === btn1)
  ) {
    sonucText.innerHTML = 'Oyuncu Kazandı';
    puan++;
    score.innerText = puan;
  } else {
    sonucText.innerHTML = 'Oyuncu Kaybetti';
  }
}

yeniOyun.addEventListener('click', () => {
  score.innerText = puan;
  xxx.style.display = "none";
  ucgen.style.display = "block";
  btn.style.display = "inline-block";
  btn1.style.display = "inline-block";
  btn2.style.display = "inline-block";
});
