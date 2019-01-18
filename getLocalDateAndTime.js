exports.getLocalTime = (dateTime, dash = ':') => {
    let hour = dateTime.getHours() % 12,
        hours = ("0" + (hour == 0 ? 12 : hour)).slice(-2)
    let minute = dateTime.getMinutes()
    let second = dateTime.getSeconds()
    let seconds = ("0" + second).slice(-2)
    let H_M_S = [hours, ("0" + dateTime.getMinutes()).slice(-2), seconds].join(dash)
    return H_M_S
}

exports.getLocalDate = (dateTime, dash = '-') => {
    let date = dateTime.getDate()
    let month = (1 + dateTime.getMonth()) % 12,
        months = ("0" + (month == 0 ? 12 : month)).slice(-2)
    let year = dateTime.getFullYear()
    let DD_MM_YYYY = [date, months, year].join(dash)
    return DD_MM_YYYY
}
/*
* For Testing inputs
* console.log(getLocalDate(new Date("Thu Jan 17 2019 12:31:21 GMT+0530 (India Standard Time)")))
  console.log(getLocalTime(new Date("Thu Jan 17 2019 12:31:21 GMT+0530 (India Standard Time)")))
*
* */
