const title = document.getElementById("title");
const description = document.querySelector("#description");
const button = document.getElementById("changeBtn");
const box = document.getElementById("box");

console.log("Javascript loaded successfully");

button.addEventListener("click", () => {
   
    description.textContent = "Text changed using Javascript";
   
    title.style.color = "green";
   
    box.classList.toggle("active");
   
    console.log("Button clicked");

});