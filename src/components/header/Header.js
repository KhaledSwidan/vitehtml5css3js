import navItems from '../../data/HeaderData';
import style from './styleHeader.module.css';

const Header = () => {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  const navMenu = document.createElement('ul');
  navMenu.id = 'nav-menu';

  navItems.forEach((item) => {
    const li = document.createElement('li');

    if (item.dropdown) {
      const dropdownContainer = document.createElement('div');
      dropdownContainer.classList.add(style.item);

      const dropdownBtn = document.createElement('button');
      dropdownBtn.classList.add(style.dropdown_btn);
      dropdownBtn.setAttribute('aria-expanded', 'false');
      dropdownBtn.textContent = `${item.name} ▼`;

      const dropdownList = document.createElement('ul');
      dropdownList.classList.add(style.dropdown);

      item.dropdown.forEach((subItem) => {
        const subLi = document.createElement('li');
        const subLink = document.createElement('a');
        subLink.href = subItem.link;
        subLink.textContent = subItem.name;
        subLi.appendChild(subLink);
        dropdownList.appendChild(subLi);
      });

      li.addEventListener('click', () => {
        const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
        dropdownBtn.setAttribute('aria-expanded', !isExpanded);
        dropdownList.classList.toggle(style.open, !isExpanded);
      });

      dropdownContainer.appendChild(dropdownBtn);
      dropdownContainer.appendChild(dropdownList);
      li.appendChild(dropdownContainer);
    } else {
      const link = document.createElement('a');
      link.classList.add(style.item);
      link.href = item.link;
      link.textContent = item.name;
      li.appendChild(link);
    }

    navMenu.appendChild(li);
  });

  nav.appendChild(navMenu);
  header.appendChild(nav);

  return header;
};

export default Header;
