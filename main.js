// Filtrado de cursos
function filtrarCursos(tema) {
  const cursos = document.querySelectorAll(".curso-card");

  cursos.forEach((curso) => {
    if (tema === "todos") {
      curso.style.display = "block";
    } else {
      curso.style.display = curso.dataset.tema === tema ? "block" : "none";
    }
  });
}

// Búsqueda dinámica
document
  .getElementById("buscador-cursos")
  ?.addEventListener("input", function (e) {
    const termino = e.target.value.toLowerCase();
    const cursos = document.querySelectorAll(".curso-card");

    cursos.forEach((curso) => {
      const titulo = curso.querySelector("h3").textContent.toLowerCase();
      curso.style.display = titulo.includes(termino) ? "block" : "none";
    });
  });
