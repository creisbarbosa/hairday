import { schedulesDay } from "../schedules/load.js"

// Selecionar o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horaários quando o input da data mudar
selectedDate.onchange = () => schedulesDay()