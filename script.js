function showMessage() {
  const msg = document.getElementById("message");
  msg.classList.remove("hidden");

  // Crear corazones animados
  for (let i = 0; i < 10; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("i");
  heart.className = "fa-solid fa-heart";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  heart.style.fontSize = Math.random() * 30 + 20 + "px";
  heart.style.color = "red";
  document.body.appendChild(heart);

  let pos = 0;
  const anim = setInterval(() => {
    if (pos > window.innerHeight) {
      heart.remove();
      clearInterval(anim);
    }
    pos += 2;
    heart.style.bottom = pos + "px";
  }, 20);
}
