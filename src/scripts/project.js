const job = document.querySelector('.project');
const exitAll = document.querySelectorAll('.exit-close');
const exit = document.querySelector('.exit-close');
const readMoreAll = document.querySelectorAll('.read-more');



Array.from(readMoreAll).forEach(function(read) {
  read.addEventListener('click', () => {
    const data = read.dataset.project;
    const same = document.querySelector(`[data-project=${data}]`);
    same.classList.toggle('large-project');
    read.classList.toggle('exit-close');
    body.classList.toggle('stop-scroll');
  })
})

// exit.addEventListener('click', () => {
//   job.classList.remove('large-project');
//   exit.classList.remove('show');
//   Array.from(readMoreAll).forEach(function(read) {
//     read.classList.remove('hide');
//   })
// })

// Array.from(exitAll).forEach(function(exit) {
//   exit.addEventListener('click', () => {
//     const exit = read.dataset.project;
//     const same = document.querySelector(`[data-project=${data}]`);
//     same.classList.remove('large-project');
//     read.classList.remove('hide');
//     exit.classList.remove('show');
//     body.classList.remove('stop-scroll');
//   })
// })
