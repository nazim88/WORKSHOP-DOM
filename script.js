let email = document.querySelector('.champE')
let pass = document.querySelector('.champP')
let sub = document.querySelector('.btn')
let h2 = document.querySelector('.true')
let h5 = document.querySelector('.false')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let correctEmail = "nazim@gmail.com"
let correctPass = "12345"

sub.addEventListener("click", submit)
function submit(event){

if (email.value === correctEmail && pass.value === correctPass) {
    h2.classList.toggle("correct")
    left.classList.toggle("none")   
    right.classList.toggle("none") 
} else {
    h5.classList.toggle("fail") 
    setTimeout(()=>{
        h5.innerHTML = "";
    },4000);
}
}
