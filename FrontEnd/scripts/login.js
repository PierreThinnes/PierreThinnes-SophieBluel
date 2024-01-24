const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
const submitUserInfo = document.getElementById("submitUserInfo");
const errorDial = document.getElementById("error-dial");

// REQUETE POST
async function logIn(data) {
  const loginUrl = "http://localhost:5678/api/users/login";
  const loginOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: data,
  };
  return await (await fetch(loginUrl, loginOptions)).json();
}

// DECLENCHER LA REQUETE POST
submitUserInfo.addEventListener("click", async (event) => {
  try {
    event.preventDefault();
    const user = JSON.stringify({
      email: inputEmail.value,
      password: inputPassword.value,
    });
    const response = await logIn(user);
    console.log(response);
    if (response.userId === 1) {
      sessionStorage.setItem("token", response.token);
      window.location.href = "index.html";
    } else errorDial.style.display = "block";
  } catch (error) {
    window.alert("Problême de connection à la base de donnée");
    console.log(error);
  }
});