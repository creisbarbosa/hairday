import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carregar a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()
    if(!name) {
      return alert("Informe o nome do cliente")
    }

    // REcupera o horário selecionafo
    const hourSelected = document.querySelector(".hour-selected")

    // Recupera o horário selecionado
    if(!hourSelected) {
      return alert("Seleciona a hora")
    }

    //Recuper somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um ID
    const id = new Date().getTime().toString()

    // Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    })


    // Recarrega os agendamentos
    await schedulesDay()

    // Limpa o input de nome do cliente
    clientName.value = ""

  } catch (error) {
    alert("Não foi possível realizar o agendamento")
    console.log(error)
  }
}