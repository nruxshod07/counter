let curr = 0
let counterBtns = document.querySelectorAll('.counter button')
let num = document.querySelector('.num')
let timer = document.querySelector('.timer')
let continueBtn = document.querySelector('.continue')
let stopBtn = document.querySelector('.stop')
let timerBtns = document.querySelectorAll('.timer button')
let timerScreen = document.querySelector('.timer h1')
let interval
let hours = 0
let seconds = 0
let minutes = 0
let milliseconds = 0
counterBtns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')
        if (btnType === "plus") {
            curr = curr + 1
            num.innerHTML = curr
        } else if (btnType === "minus") {
            curr = curr - 1
            num.innerHTML = curr
        } else if (btnType === "random") {
            curr = Math.round(Math.random() * (100 - -100) + -100)
            num.innerHTML = curr
        } else if (btnType === "reset") {
            curr = 0
            num.innerHTML = curr
        }
    }
})
timerBtns.forEach(btn => {
    btn.onclick = () => {
        let btnType = btn.getAttribute('data-type')
        if (btnType === "start") {
            startTimer()
        } else if (btnType === "stop") {
            stopTimer()
        } else if (btnType === "reset") {
            resetTimer()
        } else if (btnType === "continue") {
            continueTimer()
        }
    }
})
function startTimer() {
    stopBtn.style = "display:flex;"
    continueBtn.style = "display:none;"
    hours = 0
    seconds = 0
    minutes = 0
    milliseconds = 0
    clearInterval(interval)
    interval = setInterval(() => {
        milliseconds++
        if (milliseconds === 30) {
            milliseconds = 0
            seconds++
        } else if (seconds === 60) {
            seconds = 0
            minutes++
        } else if (minutes === 60) {
            minutes = 0
            hours++
        }
        timerScreen.innerHTML = `${hours < 10 ? `0${hours}` : hours}h:${minutes < 10 ? `0${minutes}` : minutes}m:${seconds < 10 ? `0${seconds}` : seconds}s:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}ms`
    }, 33)
}
function continueTimer() {
    interval = setInterval(() => {
        milliseconds++
        if (milliseconds === 30) {
            milliseconds = 0
            seconds++
        } else if (seconds === 60) {
            seconds = 0
            minutes++
        } else if (minutes === 60) {
            minutes = 0
            hours++
        }
        timerScreen.innerHTML = `${hours < 10 ? `0${hours}` : hours}h:${minutes < 10 ? `0${minutes}` : minutes}m:${seconds < 10 ? `0${seconds}` : seconds}s:${milliseconds < 10 ? `0${milliseconds}` : milliseconds}ms`
    }, 33)
}
function stopTimer() {
    clearInterval(interval)
    continueBtn.style = "display:flex;"
}
function resetTimer() {
    continueBtn.style = "display:none;"
    stopBtn.style = "display:none;"
    clearInterval(interval)
    seconds = 0
    milliseconds = 0
    minutes = 0
    hours = 0
    timerScreen.innerHTML = `0${hours}h:0${minutes}m:0${seconds}s:0${milliseconds}ms`
}
