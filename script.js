const containerSection = document.querySelector(".container"),
header = containerSection.querySelector("header");

const dragSection = ({movementX,movementY})=>{
    let getStyle = window.getComputedStyle(containerSection);
    let left = parseInt(getStyle.left); // getting left value of container and parsing it into the integer
    let top = parseInt(getStyle.top);   // getting top value of container and parsing it into the integer
    containerSection.style.left = `${left + movementX}px`;
    containerSection.style.top = `${top + movementY}px`;
}

containerSection.addEventListener("mousedown",()=>{
    containerSection.classList.add("active");
    containerSection.addEventListener("mousemove",dragSection);
})
document.addEventListener("mouseup",()=>{
    containerSection.classList.remove("active");
    containerSection.removeEventListener("mousemove",dragSection);
})