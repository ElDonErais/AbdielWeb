function rotateClockHands() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourRotation = (hour % 12) * 30 + (minute / 2);
    const minuteRotation = minute * 6 + (second / 10);
    const secondRotation = second * 6;

    document.getElementById('hour-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondRotation}deg)`;

    const digitalClock = document.getElementById('digital-clock');
    digitalClock.textContent = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;
}

setInterval(rotateClockHands, 1000);