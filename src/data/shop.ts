export type ProductCategory = "Kubki" | "Misy" | "Wazony";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  detail: string;
  image: string;
}

export const productCategories: ProductCategory[] = ["Kubki", "Misy", "Wazony"];

export const products: Product[] = [
  {
    id: "kubek-fala",
    name: "Kubek Fala",
    category: "Kubki",
    price: 79,
    detail: "320 ml, szkliwo kobaltowe",
    image: "/images/demos/product-1.svg",
  },
  {
    id: "misa-piasek",
    name: "Misa Piasek",
    category: "Misy",
    price: 129,
    detail: "Średnica 22 cm",
    image: "/images/demos/product-2.svg",
  },
  {
    id: "wazon-luk",
    name: "Wazon Łuk",
    category: "Wazony",
    price: 219,
    detail: "Wysokość 28 cm",
    image: "/images/demos/product-3.svg",
  },
  {
    id: "kubek-glina",
    name: "Kubek Glina",
    category: "Kubki",
    price: 69,
    detail: "250 ml, surowy spód",
    image: "/images/demos/product-4.svg",
  },
  {
    id: "misa-noc",
    name: "Misa Noc",
    category: "Misy",
    price: 149,
    detail: "Średnica 26 cm",
    image: "/images/demos/product-5.svg",
  },
  {
    id: "wazon-kula",
    name: "Wazon Kula",
    category: "Wazony",
    price: 179,
    detail: "Wysokość 18 cm",
    image: "/images/demos/product-6.svg",
  },
];

export const FREE_SHIPPING_FROM = 300;
export const SHIPPING_COST = 18;
