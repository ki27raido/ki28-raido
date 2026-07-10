// الرابط الصوتي المباشر لقناتك على Mixlr ليعمل الصوت داخل الموقع فوراً دون تحويل
const streamUrl = "https://edge.mixlr.com/channel/ki27radio"; 

let audio = null;
const playBtn = document.getElementById('playBtn');
const btnIcon = document.getElementById('btnIcon');
const btnText = document.getElementById('btnText');
const waveContainer = document.getElementById('waveContainer');
const logoCircle = document.getElementById('logoCircle');
const statusText = document.getElementById('status-text');
const volumeSlider = document.getElementById('volumeSlider');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        statusText.innerText = "جاري الاتصال بالبث المباشر...";
        
        // إنشاء اتصال جديد بالبث المباشر لضمان تشغيل اللحظة الحالية للراديو الحي
        audio = new Audio(streamUrl);
        audio.volume = volumeSlider.value;

        audio.play()
            .then(() => {
                isPlaying = true;
                btnIcon.className = "fa-solid fa-stop";
                btnText.innerText = "إيقاف مؤقت";
                statusText.innerText = "أنت تستمع الآن للبث المباشر عبر Mixlr";
                waveContainer.classList.add('playing');
                logoCircle.classList.add('rotate-logo');
            })
            .catch(error => {
                console.error("خطأ في الاتصال بالبث:", error);
                statusText.innerText = "الإذاعة مغلقة حالياً أو الرابط غير متاح الآن";
            });
    } else {
        // عند الإيقاف يتم تصفير كائن الصوت لقطع الاتصال بالسيرفر تماماً وتوفير البيانات
        if (audio) {
            audio.pause();
            audio.src = ''; 
            audio = null;
        }
        isPlaying = false;
        btnIcon.className = "fa-solid fa-play";
        btnText.innerText = "استمع الآن";
        statusText.innerText = "تم إيقاف البث";
        waveContainer.classList.remove('playing');
        logoCircle.classList.remove('rotate-logo');
    }
});

// تفعيل التحكم بشريط الصوت أثناء الاستماع
volumeSlider.addEventListener('input', (e) => {
    if (audio) {
        audio.volume = e.target.value;
    }
});
