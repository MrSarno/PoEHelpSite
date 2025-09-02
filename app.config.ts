export default defineAppConfig({
  header: {
    title: "PoE Community Help"
  },

  footer: {
    credits: {
      icon: '',
      text: `© ${new Date().getFullYear()} John Sweeney // Sarno#0943   |   This website is neither affiliated with, nor endorsed by, Grinding Gear Games`,
      href: '/'
    },
  },

  seo: {
    title: "PoE Community Help",
    description: "The best resource for Path of Exile players encountering technical issues!"
  },

  github: false,

  socials: {},

  ui: {
    colors: {
      primary: "cyan",
      neutral: "slate"
    }
  },

  toc: {
    title: "Table of Contents"
  }
})