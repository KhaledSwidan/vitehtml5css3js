const Home = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our Navigo-based project.</p>
  `;
  return div;
};

export default Home;
