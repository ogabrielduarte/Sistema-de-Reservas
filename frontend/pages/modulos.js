export function verificarLogin() {
    const token = localStorage.getItem('token')

    if (!token) {
        alert('Faça o log-in para acessar o perfil')
        window.location.href = './login.html'
    }
}

/* olho senha */

export function senhaToggle() {
    const showHide = event.currentTarget
    const senhaFill = document.getElementById("senhaFill")

    showHide.classList.toggle("fa-eye-slash")
    const tipo = senhaFill.getAttribute("type") === "password" ? "text" : "password"
    senhaFill.setAttribute("type", tipo)
}

/* slide index */

const indexIMG = []
for (let i = 1; i <= 5; i++) {
    indexIMG.push(`./assets/images/index-img-${i}.jpg`)
}

indexIMG.forEach(src => {
    const img = new Image()
    img.src = src
})

export function indexBG() {
    const fundo1 = document.getElementById('fundo')
    const fundo2 = document.getElementById('fundo2')

    let atual = 0
    let camadaAtiva = 1  // controla qual div está "na frente"

    // Inicia com a primeira imagem na camada 1
    fundo1.style.backgroundImage = `url('${indexIMG[atual]}')`
    fundo1.style.opacity = '1'
    fundo2.style.opacity = '0'

    setInterval(() => {
        atual = (atual + 1) % indexIMG.length

        if (camadaAtiva === 1) {
            // Carrega a próxima imagem na camada 2 e traz ela pra frente
            fundo2.style.backgroundImage = `url('${indexIMG[atual]}')`
            fundo2.style.opacity = '1'
            fundo1.style.opacity = '0'
            camadaAtiva = 2
        } else {
            // Carrega na camada 1 e traz ela pra frente
            fundo1.style.backgroundImage = `url('${indexIMG[atual]}')`
            fundo1.style.opacity = '1'
            fundo2.style.opacity = '0'
            camadaAtiva = 1
        }
    }, 8000)
}
