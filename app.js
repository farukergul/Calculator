const container = document.querySelector(".container");
const ekran = document.querySelector(".ekran");
const hesap = document.querySelector(".hesap");

container.addEventListener("click", (e) => {
  let tus = e.target.innerHTML;
  if (tus == "AC") {
    hesap.style.fontSize = "2rem";
    e.target.parentElement.previousElementSibling.innerHTML = "0";
    e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML =
      " ";
  } else if (tus == "+/-") {
    let sonuc = e.target.parentElement.previousElementSibling.innerHTML;
    e.target.parentElement.previousElementSibling.innerHTML = sonuc * -1;
  } else if (e.target.parentElement.classList.contains("main")) {
    null;
  } else if (tus == "%") {
    let sonuc = e.target.parentElement.previousElementSibling.innerHTML;
    e.target.parentElement.previousElementSibling.innerHTML = sonuc * 0.01;
  } else if (e.target.innerHTML == "+") {
    ekran.innerHTML = hesap.innerHTML + "+";
    hesap.innerHTML = "";
  } else if (e.target.innerHTML == "-") {
    ekran.innerHTML = hesap.innerHTML + "-";
    hesap.innerHTML = "";
  } else if (e.target.innerHTML == "x") {
    ekran.innerHTML = hesap.innerHTML + "x";
    hesap.innerHTML = "";
  } else if (e.target.innerHTML == "÷") {
    ekran.innerHTML = hesap.innerHTML + "÷";
    hesap.innerHTML = "";
  } else if (e.target.innerHTML == ".") {
    if (hesap.innerHTML.includes(".")) {
      hesap.innerHTML += "";
    } else {
      hesap.innerHTML += ".";
    }
  } else if (e.target.innerHTML == "=") {
    if (ekran.innerHTML.slice(ekran.innerHTML.length - 1) == "+") {
      let sonuc =
        Number(ekran.innerHTML.slice(0, ekran.innerHTML.length - 1)) +
        Number(hesap.innerHTML);
      hesap.innerHTML = sonuc;
      ekran.innerHTML = "";
    } else if (ekran.innerHTML.slice(ekran.innerHTML.length - 1) == "-") {
      let sonuc =
        Number(ekran.innerHTML.slice(0, ekran.innerHTML.length - 1)) -
        Number(hesap.innerHTML);
      hesap.innerHTML = sonuc;
      ekran.innerHTML = "";
    } else if (ekran.innerHTML.slice(ekran.innerHTML.length - 1) == "x") {
      let sonuc =
        Number(ekran.innerHTML.slice(0, ekran.innerHTML.length - 1)) *
        Number(hesap.innerHTML);
      hesap.innerHTML = sonuc;
      ekran.innerHTML = "";
    } else if (ekran.innerHTML.slice(ekran.innerHTML.length - 1) == "÷") {
      let sonuc =
        Number(ekran.innerHTML.slice(0, ekran.innerHTML.length - 1)) /
        Number(hesap.innerHTML);
      hesap.innerHTML = sonuc;
      ekran.innerHTML = "";
    }
  } else {
    hesap.innerHTML += tus;
    if (hesap.innerHTML.length > 16) {
      hesap.style.fontSize = "1rem";
      ekran.style.fontSize = "1.2rem";
    } else {
      hesap.style.fontSize = "2rem";
      ekran.style.fontSize = "2rem";
    }
  }
});
