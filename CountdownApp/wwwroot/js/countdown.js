startTime();

function startTime() {
    const end = new Date(2026, 6, 18, 10, 15, 0); // Corrected to June (Month 5)
    const now = Date.now();
    let durationMs = end - now;

    // Handle the case where the date has already passed
    if (durationMs < 0) durationMs = 0;

    // Calculate time units using total milliseconds
    const seconds = Math.floor((durationMs / 1000) % 60);
    const minutes = Math.floor((durationMs / (1000 * 60)) % 60);
    const hours = Math.floor((durationMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(durationMs / (1000 * 60 * 60 * 24));

    const duration = { days, hours, minutes, seconds };

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