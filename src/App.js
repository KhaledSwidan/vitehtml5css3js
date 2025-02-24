import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cards from './ui/cards/Cards';

const App = () => {
  const app = document.createElement('div');
  app.appendChild(Header());
  app.appendChild(Cards());
  app.appendChild(Footer());
  return app;
};

export default App;
