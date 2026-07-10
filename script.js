const btn = document.getElementById('playBtn');
const bars = document.getElementById('bars');
const status = document.getElementById('statusText');
let playing = false;

btn.addEventListener('click', () => {
  playing = !playing;
  btn.textContent = playing ? '❚❚' : '▶';
  btn.classList.toggle('playing', playing);
  bars.classList.toggle('on', playing);
  status.textContent = playing ? 'جاري تشغيل مشغل Mixlr بالأسفل 👇' : 'اضغط للاستماع مباشرة عبر Mixlr';
  if (playing) {
    document.getElementById('listen').scrollIntoView({behavior:'smooth', block:'center'});
  }
});
