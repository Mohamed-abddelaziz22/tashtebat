const next = document.getElementById("next");
const allimeg = document.getElementById("all-imeg");
const pre = document.getElementById("pre");

let i = 0;
const imgarr = [
  `<img src="./معلم جبس بورد/5c60fe2e575e95eb5f016ea843383c6d.jpg" alt="" />`,
  `<img src="./معلم جبس بورد/img (5).jpeg" alt="" />`,
  `<img src="./معلم جبس بورد/img (7).jpeg" alt="" />`,
  `<img src="./مهندس كهرباء/imr (1).jpg" alt="" />`,
  ` <img src="./مهندس كهرباء/imr (3).jpg" alt="" />`,
];



            
            
            
           
(allimeg.innerHTML += `<img src="./معلم جبس بورد/5c60fe2e575e95eb5f016ea843383c6d.jpg" alt="" />`),
  // click on next
  next.addEventListener("click", (eo) => {
    i++;
    pre.removeAttribute("disabled");
    pre.classList.remove("active");

    allimeg.innerHTML += imgarr[i];
    if (i > imgarr.length - 2) {
      next.setAttribute("disabled", "");
      next.classList.add("active");
    }
    divallbutt.parentElement
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    divallbutt.getElementsByTagName("button")[i].classList.add("active-num");
  });
// click on pre
pre.addEventListener("click", (eo) => {
  i--;
  next.removeAttribute("disabled");
  next.classList.remove("active");

  allimeg.innerHTML += imgarr[i];
  if (i == 0) {
    pre.setAttribute("disabled", "");
    pre.classList.add("active");
  }
  divallbutt.parentElement
    .getElementsByClassName("active-num")[0]
    .classList.remove("active-num");
  divallbutt.getElementsByTagName("button")[i].classList.add("active-num");
});

// click on button-num
const divallbutt = document.querySelector(".all-b-num");
const allbuttons = document.querySelectorAll(".buttnu");
allbuttons.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    i = index;
    divallbutt.parentElement
      .getElementsByClassName("active-num")[0]
      .classList.remove("active-num");
    item.classList.add("active-num");
    allimeg.innerHTML += imgarr[index];

    if (index == 0) {
      pre.setAttribute("disabled", "");
      next.removeAttribute("disabled");
    } else if (index > imgarr.length - 2) {
      next.setAttribute("disabled", "");
      pre.removeAttribute("disabled");
      pre.classList.remove("active");
    } else {
      next.removeAttribute("disabled");
      pre.removeAttribute("disabled");
      pre.classList.remove("active");
      next.classList.remove("active");
    }
  });
});

// hover on khadmat

const contnav = document.getElementById("contnav");
const contnav2 = document.getElementById("contnav2");
contnav.addEventListener("mouseover", (eo) => {
  contnav2.style.display = "block";
});
contnav.addEventListener("mouseout", (eo) => {
  contnav2.style.display = "none";
});
contnav2.addEventListener("mouseover", (eo) => {
  contnav2.style.display = "block";
});

contnav2.addEventListener("mouseout", (eo) => {
  contnav2.style.display = "none";
});


