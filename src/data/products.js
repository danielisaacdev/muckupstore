export const products = [
  {
    id: 'el-gran-sofa',
    name: 'El Gran Sofá',
    category: 'asientos-premium',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=800'
    ],
    rating: 4.8,
    reviews: 124,
    description: 'Experimenta el confort definitivo con nuestro sofá insignia. Diseñado con proporciones generosas y materiales de primera calidad para convertirse en el centro de tu sala de estar.',
    colors: ['#E5E7EB', '#4B5563', '#1F2937', '#78350F'],
    materials: ['Lino', 'Terciopelo', 'Cuero Vegano'],
    dimensions: '240cm x 100cm x 85cm',
    weight: '65 kg',
    tags: ['Minimalista', 'Confort', 'Modular'],
    isBestseller: true
  },
  {
    id: 'sillon-nube',
    name: 'Sillón Nube',
    category: 'asientos-premium',
    price: 599,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800'],
    rating: 4.9,
    reviews: 89,
    description: 'Un sillón diseñado para abrazarte. Su relleno de plumas sintéticas ofrece una experiencia de asiento inigualable.',
    colors: ['#F3F4F6', '#9CA3AF'],
    materials: ['Bouclé', 'Algodón'],
    dimensions: '90cm x 95cm x 80cm',
    weight: '25 kg',
    tags: ['Acogedor', 'Moderno'],
    isNew: true
  },
  {
    id: 'silla-comedor-zen',
    name: 'Silla de Comedor Zen',
    category: 'asientos-premium',
    price: 149,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800'],
    rating: 4.5,
    reviews: 210,
    description: 'Líneas limpias y ergonomía perfecta para largas sobremesas.',
    colors: ['#000000', '#FFFFFF', '#D1D5DB'],
    materials: ['Madera de Fresno', 'Cuero'],
    dimensions: '45cm x 50cm x 85cm',
    weight: '6 kg',
    tags: ['Comedor', 'Madera']
  },
  {
    id: 'lampara-pie-arco',
    name: 'Lámpara de Pie Arco',
    category: 'iluminacion',
    price: 350,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800'],
    rating: 4.9,
    reviews: 75,
    description: 'Una pieza escultural que ilumina tu espacio con elegancia.',
    colors: ['#000000', '#D1D5DB'],
    materials: ['Acero', 'Mármol'],
    isBestseller: true
  },
  {
    id: 'jarron-escultural',
    name: 'Jarrón Escultural',
    category: 'decoracion',
    price: 85,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=800',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&q=80&w=800'],
    rating: 4.8,
    reviews: 56,
    description: 'Formas orgánicas que destacan por sí solas.',
    colors: ['#F3F4F6', '#D1D5DB'],
    materials: ['Cerámica Artesanal'],
    isBestseller: true
  }
];

export const categories = [
  { id: 'asientos-premium', name: 'Asientos Premium' },
  { id: 'iluminacion', name: 'Iluminación' },
  { id: 'decoracion', name: 'Decoración' }
];

export const collectionsData = [
  {
    id: 'esencia-nordica',
    title: 'Esencia Nórdica',
    description: 'Líneas puras y maderas claras.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
    link: '/category/asientos-premium'
  },
  {
    id: 'brutalismo-moderno',
    title: 'Brutalismo Moderno',
    description: 'Materiales crudos y formas audaces.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
    link: '/category/asientos-premium'
  }
];
