function criaTarefa() {
  const novaTarefa = document.getElementById("tarefa");
  const diasSemana = document.getElementById("dias-semana").value;
  const ondeAcrescenta = document.getElementById(diasSemana)

  ondeAcrescenta.innerHTML += `<li>${novaTarefa.value}</li>`

  if (novaTarefa.value === "") {
    alert("Insira uma tarefa válida!")
  }

  novaTarefa.value = ""
}