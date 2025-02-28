const navItems = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  {
    name: 'Skills',
    dropdown: [
      { name: 'React', link: '/skillReact' },
      { name: 'Angular', link: '/skillAngular' },
      { name: 'Vue', link: '/skillVue' },
    ],
  },
  { name: 'Contact', link: '/contact' },
  { name: 'Login', link: '/login' },
];

export default navItems;
