module.exports = {
  url: 'https://portfolio-kittygiraudel.vercel.app',
  description:
    'I’m Kitty Testing, a non-binary web developer based in Virginia, focused on accessibility and inclusivity.',
  author: 'Kitty Giraudel',
  environment: process.env.NODE_ENV,
  time: new Date(),
  pubDate: new Date(2012, 10, 10),
  nav: [
    { path: '/blog/', label: 'Blog' },
    { path: '/projects/', label: 'Projects' },
    { path: '/snippets/', label: 'Snippets' },
    { path: '/talks/', label: 'Talks' },
    { path: '/about/', label: 'About' },
  ],
}
