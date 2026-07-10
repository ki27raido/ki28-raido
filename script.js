function updateTime() {

    const now = new Date();

    document.getElementById("date").textContent =
        now.toLocaleDateString("ar-SA");

    document.getElementById("time").textContent =
        now.toLocaleTimeString("ar-SA");

}

updateTime();

setInterval(updateTime, 1000);
