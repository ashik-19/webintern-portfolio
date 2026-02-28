const images = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

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