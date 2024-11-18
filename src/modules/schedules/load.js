import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js"

// Seleciona o imput de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    // Obtém a data do input
    const date = selectedDate.value

    // Buscar na API os agendamentos para carregar no lado direito da tela
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)

    // Exibe os agendamentos
    schedulesShow({ dailySchedules })

    // 1. Renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules })

    // Os horários disponíveis (horário futuro + horário não agendado) do lasdo esqwuerso (form)
}