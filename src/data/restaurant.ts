export const restaurantMenu = {
  "Na początek": [
    {
      name: "Pieczony burak",
      description: "Twaróg kozi, orzech laskowy, olej koperkowy",
      price: 36,
    },
    { name: "Tatar z pstrąga", description: "Jabłko, chrzan, chleb żytni", price: 44 },
    { name: "Krem z pieczonego selera", description: "Gruszka i palone masło", price: 29 },
  ],
  "Z ognia": [
    { name: "Kaczka z węgla", description: "Śliwka, kasza pęczak, jarmuż", price: 84 },
    { name: "Sandacz z patelni", description: "Maślany sos, fenkuł, ziemniaki", price: 79 },
    { name: "Dynia z żaru", description: "Soczewica, szałwia, pestki", price: 56 },
  ],
  "Na słodko": [
    { name: "Sernik palony", description: "Sezonowe owoce", price: 32 },
    { name: "Lody z kwaśnej śmietany", description: "Miód i kruszonka gryczana", price: 28 },
  ],
} as const;

export type MenuSection = keyof typeof restaurantMenu;
export const menuSections = Object.keys(restaurantMenu) as MenuSection[];
