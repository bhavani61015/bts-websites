function showLove() {
document.getElementById("message").innerText = "I PURPLE YOU 💜 BTS ARMY FOREVER!";
}
const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
sections.forEach(section => {
const position = section.getBoundingClientRect().top;
const screenHeight = window.innerHeight;


if (position < screenHeight - 100) {
section.style.opacity = 1;
}
});
});
function openModal(name, info) {
document.getElementById('memberName').innerText = name;
document.getElementById('memberInfo').innerText = info;
document.getElementById('memberModal').style.display = 'block';
}


function closeModal() {
document.getElementById('memberModal').style.display = 'none';
}