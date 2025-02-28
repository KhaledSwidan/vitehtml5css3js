import style from '../styles/styleLogin.module.css';
import loginLogo from '../assets/logo.png';

const blob_orbit = `
  <img src="${loginLogo}" class="${style.blob}" title="Login Logo" />
  <div class="${style.orbit}"></div>`;

const Login = () => {
  const div = document.createElement('div');
  div.classList.add(style.login_container);
  div.innerHTML = `
    ${blob_orbit}
    <div class="${style.login_card}">
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form class="${style.login_form}">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <a href="https://website.com">Forgot your password?</a>
        <p>
          Don't have account?
          <a href="/signup">Signup Here</a>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  `;
  return div;
};

export default Login;
