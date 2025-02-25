import style from './styleHeader.module.css';

const Header = () => {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  const navMenu = document.createElement('ul');
  navMenu.id = 'nav-menu';
  nav.appendChild(navMenu);
  header.appendChild(nav);

  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#' },
    {
      name: 'Skills',
      dropdown: [
        { name: 'React', link: '#' },
        { name: 'Angular', link: '#' },
        { name: 'Vue', link: '#' },
      ],
    },
    { name: 'Contact', link: '#' },
  ];

  navMenu.innerHTML = navItems
    .map((item) => {
      if (item.dropdown) {
        return `
          <li>
            <div class="item">
              <button class="dropdown-btn" aria-expanded="false">
                ${item.name} ▼
              </button>
              <ul class="dropdown">
                ${item.dropdown
                  .map(
                    (subItem) =>
                      `<li><a href="${subItem.link}">${subItem.name}</a></li>`
                  )
                  .join('')}
              </ul>
            </div>
          </li>
        `;
      }
      return `<li><a class="item" href="${item.link}">${item.name}</a></li>`;
    })
    .join('');

  return header;
};

export default Header;
