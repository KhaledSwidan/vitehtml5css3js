import { logoSrc, sections, socialsLinks } from '../../data/FooterData';
import style from './styleFooter.module.css';

const createElementWithClass = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(style[className]);
  return element;
};

const Footer = () => {
  const footer = createElementWithClass('footer', 'container');
  const upperDiv = createElementWithClass('div', 'upperDiv');

  const logo = createElementWithClass('img', 'logo');
  logo.src = logoSrc;
  logo.alt = 'Company Logo';

  const socials = createElementWithClass('div', 'socials');
  socials.innerHTML = socialsLinks
    .map(
      (social) => `
      <a class="${style.socialItem}"  
         href="https://www.${social}.com" 
         target="_blank" 
         rel="noopener noreferrer" 
         aria-label="${social}" 
         title="${social.charAt(0).toUpperCase() + social.slice(1)}">
        <i class="fa-brands fa-${social}"></i>
      </a>`
    )
    .join('');

  upperDiv.append(logo, socials);
  footer.appendChild(upperDiv);

  const linksContainer = createElementWithClass('div', 'links');

  sections.forEach(({ title, links, address }) => {
    const ul = document.createElement('ul');

    const titleLi = document.createElement('li');
    titleLi.innerHTML = `<h2>${title}</h2>`;
    ul.appendChild(titleLi);

    if (links) {
      ul.innerHTML += links
        .map((link) => `<li><a href="#">${link}</a></li>`)
        .join('');
    }

    if (address) {
      const addressLi = document.createElement('li');
      addressLi.innerHTML = `<address>${address}</address>`;
      ul.appendChild(addressLi);
    }

    linksContainer.appendChild(ul);
  });

  footer.appendChild(linksContainer);

  return footer;
};

export default Footer;
