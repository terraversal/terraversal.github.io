const dialog = document.getElementById("fa-dialog");
const openBtn = document.getElementById("fa-dialog-button");
const closeBtn = document.getElementById("close-btn");
const email = document.getElementById("email");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const staticCheckbox = document.getElementById("static-checkbox");

openBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

async function main() {
  email.innerText = "Copied to clipboard!";
  await delay(1000);
  email.innerText = "Email: sumpulvisterrae {at} gmail {dot} com";
}

email.addEventListener("click", () => {
  main();
  copyToClipboard("sumpulvisterrae@gmail.com");
});

staticCheckbox.addEventListener("click", (e) => {
  if (e.target.checked) {
    document.body.style.backgroundImage = "url('gradient.png')";
  } else {
    document.body.style.backgroundImage = "url('frutigeraero.webp')";
  }
});
