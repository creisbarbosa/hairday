import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "../schedules/load.js"

const periods = document.querySelectorAll(".period")

// Gerar evento de clique para cada lista
periods.forEach((period) => {
    // Captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")) {
            // Obtém a li pai do elemento
            const item = event.target.closest("li")

            // Pega o id do agendamento para remover
            const { id } = item.dataset

            // COnfirma que o id foi selecionado
            if(id){

                // COnfirma se o usuário quer cancelar
                const isConfirmed = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                )
                if(isConfirmed){
                    // Faz a requisição na API para cancelar
                    await scheduleCancel({ id })

                    // Recarrega os agendamentos
                    schedulesDay()
                }
            }
        }
    })
})