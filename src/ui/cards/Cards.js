import people from '../../data/CardData.js';
import styles from './styleCards.module.css';

const Cards = () => {
  const section = document.createElement('section');
  const container = document.createElement('div');
  container.className = styles.cards_container; // لا حاجة لاستخدام Template Literal هنا

  if (!Array.isArray(people) || people.length === 0) {
    console.error('⚠️ بيانات الأشخاص غير متوفرة أو غير صحيحة:', people);
    return section;
  }

  people.map((person) => {
    if (
      !person.name ||
      !person.job ||
      !person.description ||
      !person.image ||
      !Array.isArray(person.socials)
    ) {
      console.error('⚠️ بيانات غير مكتملة للشخص:', person);
      return;
    }

    const card = document.createElement('div');
    card.classList.add(styles.card);

    card.innerHTML = `
      <img src="${person.image}" alt="${person.name}" />
      <div>
        <h2>${person.name}</h2>
        <h3>${person.job}</h3>
        <p>${person.description}</p>
        <div class="${styles.socials}">
          ${person.socials
            .map((social) => `<button>${social}</button>`)
            .join('')}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  section.appendChild(container); // يجب إضافته لمرة واحدة فقط خارج الـ forEach
  return section;
};

export default Cards;
