// function hides/shows text on click
function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  button.addEventListener('click', ()=>{ text.toggleAttribute('hidden');});
}
