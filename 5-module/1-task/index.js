// function hides a button after click
function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.addEventListener('click', (e)=>{
    e.target.hidden = true;
  });
}
