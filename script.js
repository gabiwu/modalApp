// Variables
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");

// Event Listeners
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal); // Will also close modal when container is clicked

// 'OPEN' Modal Function
function openModal(e) {
e.preventDefault();
modal.style.display = "block";
}

// 'CLOSE' Modal Function
function closeModal(e) {
modal.style.display = "none";
}