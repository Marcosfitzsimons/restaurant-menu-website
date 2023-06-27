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
      "url": "https://restaurant-menu-strapi-production.up.railway.app/api/products/?populate=*"
    },
    "getPopulars": {
      "url": "https://restaurant-menu-strapi-production.up.railway.app/api/products?populate=*&filters[0][popular][$eq]=true"
    },
    "getCategory": {
      "url": "https://restaurant-menu-strapi-production.up.railway.app/api/products?populate=*&filters[0][categoria][$eq]=" // :category
    }
    // getSingle: http://127.0.0.1:1337/api/products/:id?populate=*
  }
}
