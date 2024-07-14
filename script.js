const shareButton = document.querySelector(".btn-share");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener('click', () => {
    shareContainer.classList.toggle("active");
});

document.addEventListener('click', (event) => {
  if (!shareButton.contains(event.target) && !shareContainer.contains(event.target)) {
    shareContainer.classList.remove('active');
  }
});