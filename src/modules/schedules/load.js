import { hoursLoad } from "../form/hours-load.js"

// Seleciona o imput de data
const selectedDate = document.getElementById("date")

export function schedulesDay() {
    // Obtém a data do input
    const date = selectedDate.value
    // Buscar na API os agendamentos para carregar no lado direito da tela
    // 1. Renderiza as horas disponíveis
    hoursLoad({ date })
    // Os horários disponíveis (horário futuro + horário não agendado) do lasdo esqwuerso (form)
}