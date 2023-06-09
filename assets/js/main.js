// import Swal from "/node_modules/sweetalert2/dist/sweetalert2";

let input = document.querySelector(".available .date");
let showDateInput = document.getElementById("out");
let hideDateInput = document.getElementById("in");
let input_dec_inc = document.querySelector(".input_dec_inc");
let imageOfInc = document.querySelector(".img_increase");
let imageOfDec = document.querySelector(".img_decrease");
let inputToCloned = document.querySelector(".to-insert-after");
let firstInputClone = document.querySelector(".add-clone");
let secondInputClone = document.querySelector(".add-clone2");
let parentRemove = document.querySelector(".parent-to-remove");
let logoChanger = document.querySelectorAll(".logo-changer");
let inputsCounter = 0;

function addNewInput() {
  inputsCounter++;
  const clonedElement = firstInputClone.cloneNode(true);
  const clonedElement2 = secondInputClone.cloneNode(true);
  inputToCloned.insertAdjacentElement("afterend", clonedElement),
    inputToCloned.insertAdjacentElement("afterend", clonedElement2);
}

function removeInput() {
  const lastChild = parentRemove.lastElementChild;
  if (inputsCounter >= 1) {
    inputsCounter--;
    for (let i = 0; i < 2; i++) {
      const elementToRemove = lastChild.previousElementSibling;
      parentRemove.removeChild(elementToRemove);
    }
  }
}

function IncreaseAndConvertToNumber() {
  let val = toEnglishNumber(input_dec_inc.value);
  input_dec_inc.value = val * 2;
  let arVal = toEnglishNumber(input_dec_inc.value);
  input_dec_inc.value = toArNumber(arVal) + " طن";
}
function DecreaseAndConvertToNumber() {
  let val = toEnglishNumber(input_dec_inc.value);
  if (val >= 250) {
    input_dec_inc.value = val / 2;
  }
  let arVal = toEnglishNumber(input_dec_inc.value);
  input_dec_inc.value = toArNumber(arVal) + " طن";
}

function toEnglishNumber(strNum) {
  var ar = "٠١٢٣٤٥٦٧٨٩".split("");
  var en = "0123456789".split("");
  strNum = strNum.replace(/[٠١٢٣٤٥٦٧٨٩]/g, (x) => en[ar.indexOf(x)]);
  strNum = strNum.replace(/[^\d]/g, "");
  return strNum;
}

function toArNumber(strNum) {
  var ar = "٠١٢٣٤٥٦٧٨٩".split("");
  var en = "0123456789".split("");
  strNum = strNum.replace(/[0123456789]/g, (x) => ar[en.indexOf(x)]);
  return strNum;
}

if (imageOfDec !== null) {
  imageOfInc.addEventListener("click", IncreaseAndConvertToNumber);
  imageOfDec.addEventListener("click", DecreaseAndConvertToNumber);
}

if (showDateInput !== null) {
  showDateInput.addEventListener("change", (e) => {
    if (e.target.checked) {
      // document.querySelectorAll(".box-to-hidden").forEach((e) => {
      //   e.style.display = "none";
      // });
      document.querySelectorAll(".disabled-style").forEach((e) => {
        e.style.filter = "grayscale(1)";
        e.style.opacity = "0.4";
      });
      document.querySelectorAll(".disabled-style").forEach((e) => {
        e.removeEventListener("click", IncreaseAndConvertToNumber);
        e.removeEventListener("click", DecreaseAndConvertToNumber);
      });
      if (document.querySelector(".box-to-hidden2") !== null) {
        document.querySelector(".box-to-hidden2").style.display = "none";
      }
      if (document.querySelector(".add-new-input") !== null) {
        document.querySelectorAll(".add-new-input").forEach((e) => {
          e.style.display = "none";
        });
      }
      if (document.querySelector(".disabled-input-style") !== null) {
        document.querySelector(".disabled-input-style").style.backgroundColor =
          "#FDFDFD";
        document.querySelector(".disabled-input-style").style.borderColor =
          "#c6c6c6";
      }
      if (input !== null) {
        input.style.display = "block";
      }
    }
  });
  hideDateInput.addEventListener("change", (e) => {
    if (e.target.checked) {
      document.querySelectorAll(".box-to-hidden").forEach((e) => {
        e.style.display = "block";
      });
      if (document.querySelector(".box-to-hidden") !== null) {
        document.querySelector(".box-to-hidden").style.display = "block";
      }
      document.querySelectorAll(".disabled-style").forEach((e) => {
        e.style.filter = "unset";
        e.style.opacity = "unset";
        imageOfInc.addEventListener("click", IncreaseAndConvertToNumber);
        imageOfDec.addEventListener("click", DecreaseAndConvertToNumber);
      });
      if (document.querySelector(".box-to-hidden2") !== null) {
        document.querySelector(".box-to-hidden2").style.display = "block";
      }
      if (document.querySelector(".add-new-input") !== null) {
        document.querySelectorAll(".add-new-input").forEach((e) => {
          e.style.display = "block";
        });
      }
      if (document.querySelector(".disabled-input-style") !== null) {
        document.querySelector(".disabled-input-style").style.backgroundColor =
          "unset";
        document.querySelector(".disabled-input-style").style.borderColor =
          "#518432";
      }
      if (input !== null) {
        input.style.display = "block";
      }
      if (input !== null) {
        input.style.display = "none";
      }
    }
  });
}

function marketingSuccess() {
  Swal.fire({
    title: "تم إضافة المنتج بنجاح </br> </br>",
    iconHtml: '<img src="../../assets/img/registerations/Group-28228.svg">',
    showConfirmButton: false,
    customClass: {
      icon: "no-border",
    },
    iconColor: "transparent",
    timer: 1500,
  }).then(() => {
    window.location.href = "https://agrimisr-seller.vercel.app/";
  });
}

function registerSuccess() {
  Swal.fire({
    title: "تم التسجيل بنجاح </br> </br>",
    iconHtml: '<img src="../../assets/img/registerations/Group-28228.svg">',
    showConfirmButton: false,
    customClass: {
      icon: "no-border",
    },
    iconColor: "transparent",
    timer: 1500,
  }).then(() => {
    window.location.href = "../../reg-form-1.html";
  });
}

// Change Form CheckBox
if (document.querySelector(".checkbox-img") !== null) {
  document.querySelectorAll(".checkbox-img").forEach((e) => {
    e.addEventListener("click", (e) => {
      if (e.target.src.endsWith("Group-39544.svg")) {
        e.target.classList.toggle("image-checkbox-fade-in");
        document.querySelectorAll(".box-to-hidden").forEach((e) => {
          e.style.display = "block";
        });
        e.target.setAttribute(
          "src",
          "./assets/img/registerations/Group-39544(2).svg"
        );
      } else {
        e.target.setAttribute(
          "src",
          "./assets/img/registerations/Group-39544.svg"
        );
        e.target.classList.toggle("image-checkbox-fade-in");
        document.querySelectorAll(".box-to-hidden").forEach((e) => {
          e.style.display = "none";
        });
        document.querySelector(".box-to-hidden2").style.display = "none";
      }
    });
  });
}

if (document.querySelector(".checkbox-image") !== null) {
  document.querySelector(".checkbox-image").addEventListener("click", (e) => {
    if (e.target.src.endsWith("Group-39541.svg")) {
      e.target.src = "/assets/img/registerations/Group-39540(4).svg";
      // document.querySelector(".trash-1").classList.add("trash-active");
    } else {
      e.target.src = "/assets/img/registerations/Group-39541.svg";
      // document.querySelector(".trash-1").classList.remove("trash-active");
    }
  });
}

let checker = document.querySelector(".checkbox-img");
if (document.querySelector(".negotiations-steps .steps .box") !== null) {
  if (checker.src.endsWith("Group-39544(2).svg")) {
  }
  document.querySelectorAll(".negotiations-steps .steps .box").forEach((e) => {
    e.addEventListener("click", (e) => {
      e.target.classList.add("active");
      document
        .querySelectorAll(".negotiations-steps .steps .box")
        .forEach((res) => {
          if (res !== e) {
            res.classList.remove("active");
          }
          e.target.classList.add("active");
        });
    });
  });
}

logoChanger.forEach((img) => {
  img.addEventListener("click", (imgSelected) => {
    if (imgSelected.target.src.endsWith("global-logo.png")) {
      imgSelected.target.src = "/assets/img/registerations/Group-37846.png";
    } else {
      imgSelected.target.src = "/assets/img/registerations/global-logo.png";
    }
  });
});
