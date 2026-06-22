startTime();

function startTime() {
    const end = Temporal.PlainDateTime.from("2026-07-18T10:15:00");
    const now = Temporal.Now.plainDateTimeISO();
    const duration = now.until(end);

    const countdownClock = document.getElementsByClassName("countdownClock");
    if (countdownClock != null) {
        for (let elem of countdownClock) {
            elem.innerHTML = checkTime(duration[elem.id])
        }
    }
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}