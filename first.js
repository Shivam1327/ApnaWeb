const toggle = document.getElementById('toggleDark');
const body = document.body;

toggle.addEventListener('change', function () {
  body.classList.toggle('dark-mode');
});