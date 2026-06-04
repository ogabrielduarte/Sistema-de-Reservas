export function verificarLogin() {
    const token = localStorage.getItem('token')
    if (!token) {
        alert('Faça o log-in para acessar o perfil')
        window.location.href = './login.html'
    }
}