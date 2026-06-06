async function listarUsuarios() {
    const token = localStorage.getItem('token');

    const resposta = await fetch('http://localhost:3000/usuarios', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const data = await resposta.json();

    const usuarios = data.usuarios;

    const container = document.getElementById('container-usuarios');

    container.innerHTML = '';

    usuarios.forEach(usuario => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${usuario.nome}</h3>
        <p>Email: ${usuario.email}</p>

        <button class="btn-update">Atualizar</button>
        <button class="btn-delete">Deletar</button>
    `;

        container.appendChild(card);
    });
}

listarUsuarios();

setInterval(listarUsuarios, 5000);