export interface Product {
  id: string;
  name: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'hospital-boards',
    name: 'Hospital Boards',
    description: 'Professional medical signage solutions for hospitals and healthcare facilities, ensuring clear wayfinding and information display.',
  },
  {
    id: 'reception-boards',
    name: 'Reception Boards',
    description: 'Elegant reception signage that creates a lasting first impression for your business, combining style with functionality.',
  },
  {
    id: 'steel-letters',
    name: 'Steel Letters',
    description: 'Durable and sophisticated steel letter signage for building facades, lobbies, and outdoor installations.',
  },
  {
    id: 'neon-signs',
    name: 'Neon Signs',
    description: 'Eye-catching neon signage that brings vibrant color and energy to your brand, perfect for retail and hospitality.',
  },
  {
    id: 'glow-sign-board',
    name: 'Glow Sign Boards',
    description: 'Illuminated signage solutions that ensure your brand stands out day and night with brilliant LED technology.',
  },
];
