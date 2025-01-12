export const monthNames =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export const dayNames =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


export const getNumberOfDaysInMonth =(year, month)=>{
    return new Date(year, month + 1, 0).getDate()
}

export const getSortedDays=(year, month,)=>{
const dayIndex = getNumberOfDaysInMonth(year, month)
const firstHalf = dayNames.slice(dayIndex)

return [...firstHalf, ...dayNames.slice(0, dayIndex)]
}

export const range =(start, end)=>{
    const length = Math.abs(end - start)/1
    const {result} = Array.from({length}).reduce(({result, current}) =>({
       result: [...result, current], 
       current: current + 1
    }), {result: [], current: 0})
    return result;
}
