document.addEventListener('DOMContentLoaded', function() {
let count = 0;
const btn = document.getElementById("bigBtn");
btn.addEventListener("click", () => {
count++;
const infotext = document.getElementById("infotext");
btn.textContent = count;
infotext.textContent = ``;
if (count % 10 === 0 && count != 100) {
    infotext.textContent = `WOW! Už si na to kliknul ${count} krát!`;
}
else if (count == 100) {
    infotext.textContent = `NEVERÍM! Už si na to kliknul ${count} krát!`;
}
else if (count == 1000) {
    infotext.textContent = `TOTO UŽ NENÍ ZDRAVÉ! Už si na to kliknul ${count} krát!`;
}
const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;
btn.style.backgroundColor = randomColor;
btn.style.boxShadow = `0px 10px 20px ${randomColor}`;
});
});