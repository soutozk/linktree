function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, add a image light
    img.setAttribute("src", "/assets/logo-bk.png")
  } else {
    img.setAttribute("src", "/assets/Design_sem_nome__4_-removebg-preview.png")
  }

  //se tiver sem light mode, manter a iimagem
}
html.classList.remove("light")
