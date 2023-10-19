const API_URL = 'http://localhost:3000';

const loginTab = document.getElementById('login-tab');
const cadastroTab = document.getElementById('cadastro-tab');
const content = document.getElementById('content');

loginTab.addEventListener('click', () => showForm('login'));
cadastroTab.addEventListener('click', () => showForm('cadastro'));

function showForm(formType) {
    const form = formType === 'login' ? createLoginForm() : createCadastroForm();
    content.innerHTML = '';
    content.appendChild(form);
}

function createLoginForm() {
    const form = document.createElement('div');
    loginTab.classList.add('active')
    cadastroTab.classList.remove('active')

    form.classList.add('form-group');
    form.innerHTML = `
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required>
        <button type="button" onclick="login()">Entrar</button>
    `;
    return form;
}

function createCadastroForm() {
    const form = document.createElement('div');
    cadastroTab.classList.add('active')
    loginTab.classList.remove('active')

    // TODO colocar input "confirmPassword"
    form.classList.add('form-group');
    form.innerHTML = `
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required>
        <button type="button" onclick="cadastrar()">Cadastrar</button>
    `;
    return form;
}

async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const modal = document.getElementById('modal');

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.status === 200) {
            const data = await response.json();
            showModal(data.msg, true);
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 3000);
        } else {
            const data = await response.json();
            showModal(data.msg, false);
        }
    } catch (error) {
        console.error(error);
    }
}

async function cadastrar() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.msg);
        } else {
            alert(data.msg);
        }
    } catch (error) {
        console.error(error);
    }
}

let modalTimeout;

function showModal(message, success) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const progressBar = document.getElementById('progress-bar');

    modalContent.textContent = message;

    if (success) {
        modal.style.backgroundColor = '#28a745'; // Verde para sucesso
        progressBar.style.backgroundColor = '#167028'; // Cor verde para a barra de progresso
    } else {
        modal.style.backgroundColor = '#dc3545'; // Vermelho para falha
        progressBar.style.backgroundColor = '#791f28'; // Cor vermelha para a barra de progresso
    }

    modal.style.display = 'flex';
    progressBar.style.width = '0%'; // Zera a largura da barra de progresso inicialmente

    // Atualiza a barra de progresso a cada 100ms
    let progress = 0;
    modalTimeout = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            hideModal();
        }
    }, 30);
}

function showSuccessModal(message) {
    showModal(message, true);
    setTimeout(() => {
        hideModal();
        window.location.href = 'home.html';
    }, 3000);
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hide'); // Adiciona a classe .hide para esconder o modal
    setTimeout(() => {
        modal.style.display = 'none'; // Define display como 'none' após a animação
    }, 300);
    clearInterval(modalTimeout);
}