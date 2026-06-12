const reveals = document.querySelectorAll(".reveal");

function aparecer() {
  reveals.forEach(item => {
    const topo = item.getBoundingClientRect().top;

    if (topo < window.innerHeight - 100) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", aparecer);
aparecer();

/* TRANSIÇÃO PERSONA 5 */
const transitionScreen = document.createElement("div");
transitionScreen.classList.add("transition-screen");

transitionScreen.innerHTML = `
  <img src="gifs/novocarregar.gif" alt="Carregamento Persona 5">
`;

document.body.appendChild(transitionScreen);

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(event) {
    const href = this.getAttribute("href");

    if (!href) return;

    // Não ativa loading em âncoras da mesma página
    if (
      href.startsWith("#") ||
      href.includes("#sobre") ||
      href.includes("#atuacao") ||
      href.includes("#contato")
    ) {
      return;
    }

    // Não ativa loading em links externos, email, telefone ou nova aba
    if (
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("tel") ||
      this.hasAttribute("target")
    ) {
      return;
    }

    event.preventDefault();

    transitionScreen.classList.add("active");

    setTimeout(() => {
      window.location.href = href;
    }, 1400);
  });
});
