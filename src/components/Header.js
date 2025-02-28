import navItems from '../data/HeaderData';
import style from '../styles/styleHeader.module.css';

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

      // ✅ فتح وإغلاق القائمة عند الضغط على الزر
      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = dropdownBtn.getAttribute('aria-expanded') === 'true';
        dropdownBtn.setAttribute('aria-expanded', !isExpanded);
        dropdownList.classList.toggle(style.open, !isExpanded);
      });

      // ✅ إغلاق القائمة عند الضغط خارجها
      document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
          dropdownBtn.setAttribute('aria-expanded', 'false');
          dropdownList.classList.remove(style.open);
        }
      });

      // ✅ إغلاق القائمة عند الضغط على زر Escape
      document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') {
          dropdownBtn.setAttribute('aria-expanded', 'false');
          dropdownList.classList.remove(style.open);
        }
      });

      dropdownContainer.appendChild(dropdownBtn);
      dropdownContainer.appendChild(dropdownList);
      li.appendChild(dropdownContainer);
    } else {
      const link = document.createElement('a');
      link.classList.add(style.item);
      link.href = item.link;
      link.setAttribute('data-navigo', ''); // ✅ التصحيح هنا
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
