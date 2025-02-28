import style from '../styles/styleSignup.module.css';

const Signup = () => {
  const signup = document.createElement('div');
  signup.className = style.signup_container;
  signup.innerHTML = `
        <div class="${style.signup}">
        <div class="${style.title}">
        <h2>Sign Up</h2>
        <h3>It's quick & simple</h3>
        </div>
      <form class="${style.form}">
        <div class="${style.textbox}">
          <input type="text" placeholder="" required />
          <label>Name</label>
          <span><i class="fa-solid fa-circle-user"></i></span>
        </div>
        <div class="${style.textbox}">
          <input type="text" placeholder="" required />
          <label>Email</label>
          <span><i class="fa-solid fa-envelope"></i></span>
        </div>
        <div class="${style.textbox}">
          <input type="password" placeholder="" required />
          <label>Password</label>
          <span><i class="fa-solid fa-lock"></i></span>
        </div>
        <p>
          Signed up already?
          <a href="/login">Login Here</a>
        </p>
        <button type="submit">
          Signup
          <span><i class="fa-solid fa-arrow-right"></i></span>
        </button>
      </form>
    </div>
    `;
  return signup;
};

export default Signup;
