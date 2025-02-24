import people from '../../data/CardData.js';
import './styleCards.css';

const Cards = () => {
  const section = document.createElement('section');
  const container = document.createElement('div');
  container.className = 'cards-container';

  people.forEach((person) => {
    if (!person.name || !person.job || !person.description || !person.image) {
      console.error('Missing data for person:', person);
      return;
    }

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src="${person.image}" alt="${person.name}" />
    <div>
      <h2>${person.name}</h2>
      <h3>${person.job}</h3>
      <p>${person.description}</p>
      <div class="socials">
        <button><i class="fa-brands fa-dribbble"></i></button>
        <button><i class="fa-brands fa-pinterest"></i></button>
        <button><i class="fa-brands fa-codepen"></i></button>
      </div>
    </div>
  `;

    container.appendChild(card);
    section.appendChild(container);
  });

  return section;
};

export default Cards;
