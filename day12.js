const images = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");
const toggleBtn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");


images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display="flex";
        modalImg.src=img.src;
        document.body.style.overflow = "hidden";
    });
});
closeBtn.addEventListener("click",closeModal);
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
modal.addEventListener("click", (e) => {
    if(e.target == modal) {
        closeModal();
    }
});
document.addEventListener("keydown", (e) => {
    if(e.key == "Escape") {
        closeModal(); 
    }
});

toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark"){
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else{
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme","dark");
    }
});

if(savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}
