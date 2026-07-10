// KI27 Radio V2

console.log("مرحباً بك في KI27 Radio");

// رسالة ترحيب
window.onload = function () {
    console.log("تم تشغيل الموقع بنجاح");
};

// عرض الوقت والتاريخ
function updateTime() {

    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const date = now.toLocaleDateString('ar', options);

    const time = now.toLocaleTimeString('ar');

    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    if(dateElement) dateElement.innerHTML = date;
    if(timeElement) timeElement.innerHTML = time;

}

setInterval(updateTime,1000);
updateTime();
