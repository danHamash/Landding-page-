
  const titulo = document.getElementById("titulo-nome");
  const btnCurso = document.getElementById("btn-curso");
  const btnContato = document.getElementById("btn-contato");

  const btnVermelho = document.getElementById("vermelho");
  const btnLaranja = document.getElementById("laranja");
  const btnRoxo = document.getElementById("roxo");

  function resetCores() {
    titulo.classList.remove(
      "texto-vermelho",
      "texto-laranja",
      "texto-roxo"
    );

    btnCurso.classList.remove(
      "bg-vermelho",
      "bg-laranja",
      "bg-roxo"
    );

    btnContato.classList.remove(
      "borda-vermelha",
      "borda-laranja",
      "borda-roxo",
      "texto-vermelho",
      "texto-laranja",
      "texto-roxo"
    );
  }

  btnVermelho.addEventListener("click", () => {
    resetCores();

    titulo.classList.add("texto-vermelho");
    btnCurso.classList.add("bg-vermelho");
    btnContato.classList.add("borda-vermelha", "texto-vermelho");
  });

  btnLaranja.addEventListener("click", () => {
    resetCores();

    titulo.classList.add("texto-laranja");
    btnCurso.classList.add("bg-laranja");
    btnContato.classList.add("borda-laranja", "texto-laranja");
  });

  btnRoxo.addEventListener("click", () => {
    resetCores();

    titulo.classList.add("texto-roxo");
    btnCurso.classList.add("bg-roxo");
    btnContato.classList.add("borda-roxo", "texto-roxo");
  });