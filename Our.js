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


