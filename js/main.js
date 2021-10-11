const daysElem = document.getElementById('days')
const hoursElem = document.getElementById('hours')
const minsElem = document.getElementById('mins')
const secsElem = document.getElementById('secs')


const birthday = '18 Jul 2022'

function countdown (){
    const newBirthdate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (newBirthdate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600 % 24)
    const mins = Math.floor((totalSeconds / 60) % 60)
    const seconds = Math.floor(totalSeconds) % 60
    
    // console.log(days)
    // console.log(hours)
    // console.log(mins)
    // console.log(seconds)

    daysElem.innerHTML = days
    hoursElem.innerHTML = hours
    minsElem.innerHTML = mins
    secsElem.innerHTML = seconds
}

// inital call 
countdown()
setInterval(countdown, 1000)