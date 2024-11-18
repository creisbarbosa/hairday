import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    // Limpa a lista de horários
    hours.innerHTML = ""

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora.
        const [scheduleHour, omittedSecondPosition] = hour.split(":")

        // Adicionar a hora na data e verificar se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        // Definir se o horário está disponívek
        return {
            hour,
            available: isHourPast,
        }
    })

    // Renderizar os horários
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if ( hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // Adiciona o evento de click nos horários fisponíveis
    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hours.append(header)
}