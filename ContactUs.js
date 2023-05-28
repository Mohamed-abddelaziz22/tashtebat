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



// form
const email = document.getElementById("email")
email.addEventListener("keyup" , (eo) => { 
  const submit = document.getElementById("submit")
  const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (regEmail.test(email.value)) {
  submit.removeAttribute("disabled")
  submit.style.opacity="1"
}else{
  submit.setAttribute("disabled","disabled" )
  submit.style.opacity="0.5"
}
 })
 

 