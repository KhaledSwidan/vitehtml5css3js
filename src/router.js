import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/style.css';

import Navigo from 'navigo';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import Login from './pages/login';

const router = new Navigo('/', {
  linksSelector: 'a',
  hash: true,
});

const render = (content) => {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // ✅ مسح المحتوى القديم فقط
  if (content instanceof Node) {
    contentDiv.appendChild(content); // ✅ لا يُسمح بإضافة نصوص أو undefined
  } else {
    console.error('Error: render() expects a valid DOM Node.', content);
  }
};

// ✅ تعريف الروابط
router
  .on('/', () => render(Home()))
  .on('/login', () => render(Login()))
  .resolve();

// ✅ صفحة 404
router.notFound(() => render(NotFound()));
export default router;
