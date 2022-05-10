import chunk from 'lodash/chunk'
import startOfWeek from 'date-fns/startOfWeek'
import { addDays, setDay, format } from 'date-fns'
// import { format } from 'path'
export function buildWeeks(year, mouthIndex) {
    const firstDayOfMonth = new Date(year, mouthIndex)
    const firstDayCalender = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 })
    const weeks = new Array(6 * 7).fill(0).map((l, i) => addDays(firstDayCalender, i))
    return chunk(weeks, 7)
}
export function buildDayNames(weekStartsOn) {
    return new Array(7).fill(0).map((l, i) => (i + weekStartsOn) % 7).map(dayOfWeek => {
        const day = setDay(new Date(0), dayOfWeek)
        return format(day, "EEEEEE")
    })
}