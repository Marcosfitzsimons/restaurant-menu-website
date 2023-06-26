export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Golfo Nuevo Confitería - Menu",
  description:
    "Golfo Nuevo Confitería - ¿Qué le gustaría ordenar?",
  mainNav: [
    {
      title: "Inicio",
      href: "/",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/profile.php?id=100076494237211",
    instagram: "https://www.instagram.com/golfo_nuevoterminal/",
  },
  endPoints: {
    "getAll": {
      "url": "http://127.0.0.1:1337/api/products/?populate=*"
    },
    "getPopulars": {
      "url": "http://127.0.0.1:1337/api/products?populate=*&filters[0][popular][$eq]=true"
    },
    "getCategory": {
      "url": "http://127.0.0.1:1337/api/products?populate=*&filters[0][categoria][$eq]=" // :category
    }
    // getSingle: http://127.0.0.1:1337/api/products/:id?populate=*
  }
}
