const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

if (nav && abrir && cerrar) {
    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });
    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
}

function showLanding() {
    const landingView = document.getElementById('landing-view');
    const loginView = document.getElementById('login-view');
    if (loginView && landingView) {
        loginView.classList.add('hidden');
        landingView.classList.remove('hidden');
    }
}

function showLogin() {
    const landingView = document.getElementById('landing-view');
    const loginView = document.getElementById('login-view');
    if (loginView && landingView) {
        landingView.classList.add('hidden');
        loginView.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navHome = document.getElementById('nav-home');
    const navLogin = document.getElementById('nav-login');
    const navConsulting = document.getElementById('nav-consulting');

    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            showLanding();
            if (nav) nav.classList.remove("visible"); 
        });
    }

    if (navLogin) {
        navLogin.addEventListener('click', (e) => {
            e.preventDefault();
            showLogin();
            if (nav) nav.classList.remove("visible"); 
        });
    }

    if (navConsulting) {
        navConsulting.addEventListener('click', (e) => {
            e.preventDefault();
            if (nav) nav.classList.remove("visible"); 
            
            showLanding();
            
            setTimeout(() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        });
    }
});

function validarLogin(event) {
    event.preventDefault(); 
    const usuarioInput = document.getElementById("usuario");
    const claveInput = document.getElementById("clave");

    if (!usuarioInput || !claveInput) {
        console.error("No encuentro los inputs usuario o clave");
        return false;
    }

    const usuarioTexto = usuarioInput.value.trim().toLowerCase();
    const claveTexto = claveInput.value.trim().toLowerCase();
    if (!usuarioTexto.endsWith("@gmail.com")) {
        alert("Error: Solo se permiten correos de Gmail (ejemplo@gmail.com)");
        usuarioInput.focus();
        return false;
    }
    if (claveTexto === "ok") {
        alert("¡Bienvenido!");
        window.location.href = "index.html"; 
    } else {
        alert("Contraseña incorrecta (Pista: es 'ok').");
        claveInput.value = ""; 
        claveInput.focus();
    }
}