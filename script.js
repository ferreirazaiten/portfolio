const reveals = document.querySelectorAll(".reveal");

function aparecer(){
    reveals.forEach(item => {
        const topo = item.getBoundingClientRect().top;

        if(topo < window.innerHeight - 100){
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
    <img src="gifs/novocarregar.gif" alt="Persona Transition">
`;

document.body.appendChild(transitionScreen);

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event){
        const href = this.getAttribute("href");

        if(
            !href ||
            href.startsWith("http") ||
            href.startsWith("mailto") ||
            this.hasAttribute("target")
        ){
            return;
        }

        event.preventDefault();

        transitionScreen.classList.add("active");

        setTimeout(() => {
            transitionScreen.classList.remove("active");

            window.location.href = href;
        }, 1400);
    });
});
