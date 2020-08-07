export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number)
    const timeIntMinutes = (hour * 60) + minutes
    return timeIntMinutes
}