document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('counter-btn');
  let count = 0;

  button.addEventListener('click', () => {
    count++;
    button.textContent = `Clicked ${count} times`;
  });
});
