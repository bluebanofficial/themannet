const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

    if (username === 'youssef' && password === 'youssef') {
        window.location.href = 'index.html';

  } else {
    alert('Incorrect username or password. Please try again.');
  }
});