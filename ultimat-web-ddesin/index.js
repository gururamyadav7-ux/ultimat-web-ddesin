let btnToggle = document.querySelector(".icon");
let menuIcon = document.querySelector("li");
let icon=document.querySelector(".fa-bars")
let xmark=document.querySelector(".fa-xmark")

icon.addEventListener('click', () => {
    menuIcon.style.left="0"
    icon.style.display="none";
    xmark.style.display="block"
}
)

xmark.addEventListener('click', () => {
    menuIcon.style.left="-800px"
    icon.style.display="block";
    xmark.style.display="none"
}
)
