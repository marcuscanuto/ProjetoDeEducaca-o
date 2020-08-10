export default function converterHora(time:string ){
//8:00
// destruct
const [hour,minutes] = time.split(':').map(Number) // .map(Number)pega e transforma em número
const timeInMinutes = (hour *60) + minutes
return timeInMinutes
}