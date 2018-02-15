const body = document.querySelector('body');
const loadingPage = document.querySelector('.loading-page');
const pacman = document.querySelector('.pacman');

function startLoading() {
  body.classList.add('no-scroll');
  setTimeout(() => {
    body.classList.remove('no-scroll');
    loadingPage.classList.add('hide-loading');
    pacman.classList.add('hide-loading');
  }, 3200);
  setTimeout(() => {
    loadingPage.classList.add('remove-loading');
    pacman.classList.add('remove-loading');
  }, 3500);
}

// If user visits page for first time/after closed a window, execute loadingPage
// If user reloads page, dont do loadingPage
if (sessionStorage.getItem('key') === 'firstVisit') {
  loadingPage.classList.add('remove-loading');
  pacman.classList.add('remove-loading');
} else {
  window.onload = startLoading;
}

sessionStorage.setItem('key', 'firstVisit');
window.onbeforeunload = function(){ window.scrollTo(0,0); }
