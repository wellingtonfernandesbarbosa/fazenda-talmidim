// JS mínimo, só quando necessário

const pixBtn = document.getElementById("pixBtn");
const pixModal = document.getElementById("pixModal");
const closeBtn = document.querySelector(".close");
const copiarBtn = document.getElementById("copiarBtn");
const pixCode = document.getElementById("pixCode");
const feedback = document.getElementById("feedback");

// Abre a modal ao clicar no botão PIX
pixBtn.addEventListener("click", (event) => {
  event.preventDefault();
  pixModal.style.display = "block";
});

// Fecha a modal ao clicar no X
closeBtn.addEventListener("click", () => {
  pixModal.style.display = "none";
});

// Fecha a modal ao clicar fora dela
window.addEventListener("click", (event) => {
  if (event.target === pixModal) {
    pixModal.style.display = "none";
  }
});

// Copia o código PIX e mostra feedback
copiarBtn.addEventListener("click", () => {
  const codigoText = pixCode.textContent;

  navigator.clipboard
    .writeText(codigoText)
    .then(() => {
      // Feedback visual
      feedback.textContent = "✓ Código copiado com sucesso!";
      feedback.style.display = "block";
      feedback.style.opacity = "1";

      // Vibração tátil (se suportado)
      if (navigator.vibrate) {
        navigator.vibrate(200);
      }

      // Altera o botão temporariamente
      const originalText = copiarBtn.textContent;
      copiarBtn.textContent = "Copiado!";
      copiarBtn.style.background = "#27ae60";

      // Volta ao normal após 2 segundos
      setTimeout(() => {
        copiarBtn.textContent = originalText;
        copiarBtn.style.background = "";
        feedback.style.opacity = "0";
        setTimeout(() => {
          feedback.style.display = "none";
        }, 300);
      }, 2000);
    })
    .catch(() => {
      feedback.textContent = "✗ Erro ao copiar";
      feedback.style.display = "block";
      feedback.style.color = "#e74c3c";
    });
});
