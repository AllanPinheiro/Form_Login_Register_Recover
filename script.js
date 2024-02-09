// Variavel Login, Register, Recover

const login = document.getElementById("form-login");
const register = document.getElementById("form-register");
const recover = document.getElementById("form-Recover");

// Abrir registro

function openRegister() {
  register.style.display = "grid";
  login.style.display = "none";
}

// Abrir recuperação

function openRecover() {
  recover.style.display = "grid";
  login.style.display = "none";
}

// Fechar registro

function offRegister() {
  register.style.display = "none";
  login.style.display = "grid";
}

// Fechar recuperação

function offRecover() {
  recover.style.display = "none";
  login.style.display = "grid";
}

// Validação form-Login

const validarLogin = document.getElementById("validarLogin");

validarLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailLogin = validarLogin.inEmailLogin.value;
  const passwordLogin = validarLogin.inPasswordLogin.value;

  if (emailLogin == "admin@gmail.com" && passwordLogin == "admin") {
    alert("Logado!");
    window.location.href = "index.html";
  } else {
    alert("Dados incorreto!");
    validarLogin.reset();
  }
});

// Validação form-Register

const validarRegister = document.getElementById("validarRegister");

validarRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  const nomeRegister = validarRegister.inNomeRegister.value;
  const emailRegister = validarRegister.inEmailRegister.value;
  const passwordRegister = validarRegister.inPasswordRegister.value;

  if (nomeRegister && emailRegister && passwordRegister) {
    alert("Cadastrado!");
    window.location.href = "index.html";
  }
});

// Validação form-Recover

const validarRecover = document.getElementById("validarRecover");

validarRecover.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailRecover = validarRecover.inEmailRecover.value;

  if (emailRecover) {
    alert("Email enviado!");
    window.location.href = "index.html";
  }
});
