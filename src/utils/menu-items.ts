type MenuItem = {
  name: string,
  path: string
} 

export const navItems: MenuItem[] = [
  {
    name: "Accueil",
    path: "/"
  },
  {
    name: "Concerts",
    path: "/concerts"
  },
  {
    name: "Présentation",
    path: "/presentation"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]