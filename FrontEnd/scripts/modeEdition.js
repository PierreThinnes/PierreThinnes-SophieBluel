// Authentification
function isConnected() {
    if (sessionStorage.getItem("token")) return true;
    else {return false};
  }
  
  // Mode éditon
  export function manageEditionMode() {
    
    const adminLogged = document.getElementById("adminLogged");
    const loginToLogout = document.getElementById("loginToLogout");
    const modifierIcone = document.getElementById("modifierIcone");
    const category = document.getElementById("category");
    
    // Changement visuel
    if (isConnected() === true) {
      loginToLogout.innerText = "logout";
      loginToLogout.addEventListener("click", () => {
        sessionStorage.removeItem("token");
        window.location.replace("index.html");
      });
      adminLogged.classList.add("active");
      modifierIcone.classList.add("active");
      category.classList.add("active");
    } else {
      loginToLogout.innerText = "login";
      loginToLogout.addEventListener("click", () =>
        window.location.replace("login.html")
      );
    }
  }