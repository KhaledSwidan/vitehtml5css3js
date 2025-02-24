import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  const app = document.createElement('div');
  app.appendChild(Header());
  app.appendChild(Footer());
  return app;
};

export default App;