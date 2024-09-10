function clock() {
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    // Convert to 12-hour format
    if (hours >= 12) {
        period = "AM";
        if (hours > 24) {
            hours -= 24;
        }
    } else if (hours === 0) {
        hours = 24;
    }

    // Format hours, minutes, and seconds to always have two digits
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    document.querySelector('.period').innerHTML = period;
}

setInterval(clock, 1000);
clock(); // Initial call to display time immediately
