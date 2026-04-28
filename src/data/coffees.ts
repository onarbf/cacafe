export interface Coffee {
  id: number;
  name: string;
  roaster: string;
  origin: string;
  region: string;
  roastLevel: "Light" | "Medium" | "Medium-Dark" | "Dark";
  process: string;
  rating: number;
  ratingsCount: number;
  price: number;
  originalPrice?: number;
  description: string;
  flavorNotes: string[];
  imageUrl: string;
  badge?: string;
  altitude?: string;
  variety?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "all", name: "Todos", icon: "☕" },
  { id: "espresso", name: "Espresso", icon: "⚡" },
  { id: "filter", name: "Filtro", icon: "🫗" },
  { id: "specialty", name: "Especialidad", icon: "✨" },
  { id: "blend", name: "Blends", icon: "🔀" },
  { id: "single-origin", name: "Origen Único", icon: "📍" },
  { id: "decaf", name: "Descafeinado", icon: "🌙" },
];

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Geisha Finca La Esmeralda",
    roaster: "Café de Altura",
    origin: "Panamá",
    region: "Boquete, Chiriquí",
    roastLevel: "Light",
    process: "Lavado",
    rating: 4.8,
    ratingsCount: 2340,
    price: 42.5,
    originalPrice: 55.0,
    description:
      "Un café excepcional con notas florales intensas y una dulzura natural que recuerda al jazmín y bergamota. Cultivado a más de 1,700 metros de altitud.",
    flavorNotes: ["Jazmín", "Bergamota", "Mango", "Miel"],
    imageUrl: "/coffees/geisha.jpg",
    badge: "Puntuación 94",
    altitude: "1,700 msnm",
    variety: "Geisha",
  },
  {
    id: 2,
    name: "Yirgacheffe Natural",
    roaster: "Tostadores del Sur",
    origin: "Etiopía",
    region: "Yirgacheffe, Gedeo",
    roastLevel: "Light",
    process: "Natural",
    rating: 4.6,
    ratingsCount: 5120,
    price: 18.9,
    originalPrice: 24.5,
    description:
      "Café etíope de proceso natural con un perfil frutal explosivo. Notas de arándano y fresa con un cuerpo sedoso.",
    flavorNotes: ["Arándano", "Fresa", "Chocolate", "Vino"],
    imageUrl: "/coffees/yirgacheffe.jpg",
    altitude: "1,950 msnm",
    variety: "Heirloom",
  },
  {
    id: 3,
    name: "Huila Supremo",
    roaster: "Colombia Selecta",
    origin: "Colombia",
    region: "Huila, San Agustín",
    roastLevel: "Medium",
    process: "Lavado",
    rating: 4.5,
    ratingsCount: 8930,
    price: 15.5,
    description:
      "Un clásico colombiano de la región de Huila. Notas de caramelo, nuez y un toque cítrico con acidez brillante.",
    flavorNotes: ["Caramelo", "Nuez", "Naranja", "Panela"],
    imageUrl: "/coffees/huila.jpg",
    altitude: "1,800 msnm",
    variety: "Castillo",
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    roaster: "Maestros del Grano",
    origin: "Guatemala",
    region: "Antigua Guatemala",
    roastLevel: "Medium",
    process: "Lavado",
    rating: 4.4,
    ratingsCount: 3210,
    price: 16.75,
    originalPrice: 21.0,
    description:
      "Café cultivado en las faldas de volcanes activos. Rico cuerpo con notas de chocolate oscuro y especias suaves.",
    flavorNotes: ["Chocolate oscuro", "Canela", "Almendra", "Caramelo"],
    imageUrl: "/coffees/antigua.jpg",
    badge: "Favorito",
    altitude: "1,500 msnm",
    variety: "Bourbon",
  },
  {
    id: 5,
    name: "Kenya AA Nyeri",
    roaster: "Africa Coffee Co.",
    origin: "Kenia",
    region: "Nyeri, Monte Kenya",
    roastLevel: "Light",
    process: "Lavado doble",
    rating: 4.7,
    ratingsCount: 1890,
    price: 22.0,
    originalPrice: 28.0,
    description:
      "El emblemático AA de Kenia. Acidez vibrante tipo grosella negra con cuerpo jugoso y final largo.",
    flavorNotes: ["Grosella negra", "Tomate", "Pomelo", "Ciruela"],
    imageUrl: "/coffees/kenya.jpg",
    altitude: "1,850 msnm",
    variety: "SL-28 / SL-34",
  },
  {
    id: 6,
    name: "Sumatra Mandheling",
    roaster: "Asia Pacific Roasters",
    origin: "Indonesia",
    region: "Sumatra, Mandheling",
    roastLevel: "Dark",
    process: "Giling Basah",
    rating: 4.3,
    ratingsCount: 12450,
    price: 13.9,
    description:
      "Café indonesio con cuerpo intenso y bajo en acidez. Sabor terroso con notas de tabaco, cedro y chocolate negro.",
    flavorNotes: ["Tabaco", "Cedro", "Chocolate negro", "Tierra húmeda"],
    imageUrl: "/coffees/sumatra.jpg",
    altitude: "1,200 msnm",
    variety: "Typica",
  },
  {
    id: 7,
    name: "Brazil Santos Natural",
    roaster: "Cafeteros Unidos",
    origin: "Brasil",
    region: "Minas Gerais",
    roastLevel: "Medium",
    process: "Natural",
    rating: 4.2,
    ratingsCount: 18760,
    price: 11.5,
    originalPrice: 14.9,
    description:
      "El café más vendido de Brasil. Suave y equilibrado con notas de nuez, chocolate con leche y un dulzor natural.",
    flavorNotes: ["Nuez", "Chocolate con leche", "Caramelo", "Avellana"],
    imageUrl: "/coffees/brazil.jpg",
    badge: "Bestseller",
    altitude: "1,100 msnm",
    variety: "Mundo Novo",
  },
  {
    id: 8,
    name: "Costa Rica Tarrazú",
    roaster: "Central Valley Coffee",
    origin: "Costa Rica",
    region: "Tarrazú, Los Santos",
    roastLevel: "Medium",
    process: "Honey",
    rating: 4.5,
    ratingsCount: 4560,
    price: 19.25,
    description:
      "Proceso honey que resalta la dulzura natural. Cuerpo medio con acidez tipo manzana verde y final de miel.",
    flavorNotes: ["Manzana verde", "Miel", "Durazno", "Caña de azúcar"],
    imageUrl: "/coffees/tarrazu.jpg",
    altitude: "1,600 msnm",
    variety: "Caturra",
  },
  {
    id: 9,
    name: "Jamaica Blue Mountain",
    roaster: "Caribbean Select",
    origin: "Jamaica",
    region: "Blue Mountains",
    roastLevel: "Medium",
    process: "Lavado",
    rating: 4.6,
    ratingsCount: 980,
    price: 65.0,
    originalPrice: 78.0,
    description:
      "Uno de los cafés más exclusivos del mundo. Extremadamente suave, sin amargor, con un equilibrio perfecto.",
    flavorNotes: ["Nuez", "Vainilla", "Floral", "Chocolate suave"],
    imageUrl: "/coffees/jamaica.jpg",
    badge: "Premium",
    altitude: "1,800 msnm",
    variety: "Blue Mountain",
  },
  {
    id: 10,
    name: "Rwanda Nyamasheke",
    roaster: "African Origins",
    origin: "Ruanda",
    region: "Nyamasheke",
    roastLevel: "Light",
    process: "Lavado",
    rating: 4.4,
    ratingsCount: 2100,
    price: 17.5,
    description:
      "Café ruandés con complejidad frutal. Notas brillantes de fruta de la pasión y naranja sanguina con final limpio.",
    flavorNotes: ["Fruta de la pasión", "Naranja sanguina", "Té negro", "Miel"],
    imageUrl: "/coffees/rwanda.jpg",
    altitude: "1,700 msnm",
    variety: "Red Bourbon",
  },
  {
    id: 11,
    name: "Perú Cajamarca Orgánico",
    roaster: "Andes Coffee",
    origin: "Perú",
    region: "Cajamarca, Jaén",
    roastLevel: "Medium",
    process: "Lavado",
    rating: 4.3,
    ratingsCount: 6780,
    price: 14.25,
    originalPrice: 18.0,
    description:
      "Café orgánico certificado de los Andes peruanos. Notas de cacao, cereza y un cuerpo redondo y agradable.",
    flavorNotes: ["Cacao", "Cereza", "Vainilla", "Almendra"],
    imageUrl: "/coffees/peru.jpg",
    altitude: "1,650 msnm",
    variety: "Typica / Caturra",
  },
  {
    id: 12,
    name: "Honduras Copán SHG",
    roaster: "Mesoamérica Coffee",
    origin: "Honduras",
    region: "Copán, Santa Rosa",
    roastLevel: "Medium-Dark",
    process: "Lavado",
    rating: 4.1,
    ratingsCount: 3450,
    price: 12.9,
    description:
      "Café de altura hondureño con perfil clásico centroamericano. Notas de chocolate, caramelo y un toque de ciruela.",
    flavorNotes: ["Chocolate", "Caramelo", "Ciruela", "Nuez moscada"],
    imageUrl: "/coffees/honduras.jpg",
    altitude: "1,400 msnm",
    variety: "Lempira",
  },
  {
    id: 13,
    name: "Espresso Roma Classico",
    roaster: "Tradizione Italiana",
    origin: "Blend",
    region: "Italia",
    roastLevel: "Dark",
    process: "Blend",
    rating: 4.4,
    ratingsCount: 15620,
    price: 12.0,
    originalPrice: 16.0,
    description:
      "Blend clásico italiano para espresso. Crema densa, cuerpo potente y notas de cacao tostado y frutos secos.",
    flavorNotes: ["Cacao tostado", "Frutos secos", "Caramelo oscuro", "Especias"],
    imageUrl: "/coffees/espresso-roma.jpg",
    badge: "Clásico",
    altitude: "Blend",
    variety: "Blend",
  },
  {
    id: 14,
    name: "México Chiapas Orgánico",
    roaster: "Sierra Madre Café",
    origin: "México",
    region: "Chiapas, Soconusco",
    roastLevel: "Medium",
    process: "Lavado",
    rating: 4.2,
    ratingsCount: 4890,
    price: 13.75,
    description:
      "Café orgánico de Chiapas con notas suaves de chocolate, canela y un toque de cítricos. Ideal para el día a día.",
    flavorNotes: ["Chocolate", "Canela", "Lima", "Panela"],
    imageUrl: "/coffees/chiapas.jpg",
    altitude: "1,300 msnm",
    variety: "Typica / Bourbon",
  },
  {
    id: 15,
    name: "Decaf Swiss Water Colombia",
    roaster: "Sin Cafeína Co.",
    origin: "Colombia",
    region: "Nariño",
    roastLevel: "Medium",
    process: "Swiss Water Decaf",
    rating: 4.0,
    ratingsCount: 2340,
    price: 16.5,
    description:
      "Descafeinado por proceso Swiss Water que preserva todo el sabor. Notas de caramelo, nuez y cacao suave.",
    flavorNotes: ["Caramelo", "Nuez", "Cacao", "Vainilla"],
    imageUrl: "/coffees/decaf.jpg",
    altitude: "1,900 msnm",
    variety: "Colombia",
  },
  {
    id: 16,
    name: "Burundi Kayanza Bourbon",
    roaster: "Great Rift Roasters",
    origin: "Burundi",
    region: "Kayanza",
    roastLevel: "Light",
    process: "Lavado",
    rating: 4.5,
    ratingsCount: 890,
    price: 20.0,
    originalPrice: 26.0,
    description:
      "Joya oculta de África. Acidez tipo uva con notas de mandarina, miel y un final elegante con toques florales.",
    flavorNotes: ["Mandarina", "Uva", "Miel", "Jazmín"],
    imageUrl: "/coffees/burundi.jpg",
    altitude: "1,750 msnm",
    variety: "Bourbon",
  },
];

export function getCoffeeById(id: number): Coffee | undefined {
  return coffees.find((c) => c.id === id);
}

export function getTopRated(): Coffee[] {
  return [...coffees].sort((a, b) => b.rating - a.rating).slice(0, 8);
}

export function getBestOffers(): Coffee[] {
  return coffees
    .filter((c) => c.originalPrice)
    .sort((a, b) => {
      const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discountB - discountA;
    })
    .slice(0, 8);
}

export function getBestsellers(): Coffee[] {
  return [...coffees].sort((a, b) => b.ratingsCount - a.ratingsCount).slice(0, 8);
}
