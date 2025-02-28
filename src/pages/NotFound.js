import style from '../styles/notFound.module.css';

const NotFound = () => {
  const div = document.createElement('div');
  div.classList.add(style.not_found);

  div.innerHTML = `
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <a href="/" class=${style.back_home}>Go Back Home</a>
  `;

  return div;
};

export default NotFound;
