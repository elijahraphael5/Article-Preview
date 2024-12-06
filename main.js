
const shareButton = document.querySelector('#shareTab');
const socialTab = document.querySelector('.share');


shareButton.addEventListener('click', () => {
  socialTab.style.display = socialTab.style.display === 'none' ? "flex" : "none"
});


document.addEventListener('click', (event) => {
  if (!event.target.closest('.share') && !event.target.closest('#shareTab')) {
    socialTab.style.display = 'none'; 
  }
});