document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault()

  const username = document.getElementById("username").value
  const password = document.getElementById("password").value

  if (username === "Aika" && password === "PIRRICOMBO") {
    showHiddenContent("https://youtu.be/NBffI1y3xX8?feature=shared")
  } else if (username === "Aika" && password === "Betoben") {
    showHiddenContent("https://youtu.be/dQw4w9WgXcQ?si=TuIK4sYbthtUgf7h")
  } else {
    playAlarmSound()
    showError("No puedes entrar cerdo 🐖")
  }
})

document.getElementById("forgotPassword").addEventListener("click", (e) => {
  e.preventDefault()
  showError("ENTONCES NO PUEDES ENTRAR 🐖🐖")
})

function showError(message) {
  const errorDiv = document.getElementById("errorMessage")
  errorDiv.textContent = message
  errorDiv.style.display = "block"

  setTimeout(() => {
    errorDiv.style.display = "none"
  }, 3000)
}

function playAlarmSound() {
  const audio = document.getElementById("alarmSound")
  audio.play()
}

function showHiddenContent(linkUrl) {
  document.querySelector(".login-container").style.display = "none"
  document.getElementById("hiddenContent").style.display = "block"
  document.getElementById("hiddenLink").href = linkUrl
}

// Asegurarse de que el enlace del sobre funcione correctamente
document.getElementById("hiddenLink").addEventListener("click", function (e) {
  e.preventDefault()
  window.open(this.href, "_blank")
})

