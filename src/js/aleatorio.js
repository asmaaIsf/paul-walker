document.querySelector("#boton").addEventListener("click", function () {
  const frases = [
    "Si un día la velocidad me mata, no llores porque estaba sonriendo.",
    "El viaje es más importante que el destino.",
    "Me encanta jugar al fútbol, salir a divertirme y estar rodeado.",
    "Quieres que te respete, entonces muéstrame tus listas de reproducción",
    "La vida es demasiado corta para ser otra persona.",
    "1 sueño por cumplir, 3 coches por armar, 2 garages por armar y 7 amigos, los cuales como mi familia.",
  ];

  let fraseRandom = "";
  for (let i = 0; i < frases.length; i++) {
    for (const elemento of frases) {
      if (Math.random() < 1 / frases.length) {
        fraseRandom = elemento;
      }
    }
  }

  document.querySelector("#fraseRandom").innerHTML = fraseRandom;
});
