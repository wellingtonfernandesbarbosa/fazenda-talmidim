// JS mínimo, só quando necessário

const pixBtn = document.getElementById("pixBtn");

pixBtn.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Chave PIX: exemplo@fazendatalmidim.org");
});
