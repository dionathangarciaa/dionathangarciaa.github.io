let time = 3000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img"),
  videos = document.querySelectorAll("#second-slider img"), // Seleciona as imagens da segunda div
  max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");
  if (videos[currentImageIndex]) {
    videos[currentImageIndex].classList.remove("selected");
  }

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
  if (videos[currentImageIndex]) {
    videos[currentImageIndex].classList.add("selected");
  }
}

function updateProgressBar() {
  const progressBar = document.querySelector("#progress-bar");
  progressBar.style.width = `${(currentImageIndex + 1) * 20}%`;
}

function start() {
  setInterval(() => {
    // Troca de imagem
    nextImage();
    // Atualiza a barra de progresso
    updateProgressBar();
  }, time);
}

window.addEventListener("load", () => {
  // Inicialize a barra de progresso
  const progressBar = document.createElement("div");
  progressBar.id = "progress-bar";
  document.querySelector("#slider").appendChild(progressBar);

  start();
});
