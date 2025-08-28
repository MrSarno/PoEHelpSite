export default defineAppConfig({
  header: {
    title: "PoE Community Help"
  }, footer: {
        credits: {
            icon: '', // optional; remove or change icon
            text: `© ${new Date().getFullYear()} PoE Community Help`,
            href: '/' // or your GitHub/Legal page/etc.
        },
        // Optional: links shown in the footer center
        textLinks: [
            { text: 'Contact', href: '/contact' },
            { text: 'Privacy', href: '/privacy' }
        ]
    }

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

  github: {
    url: "",
    branch: ""
  },

  socials: {}
})
