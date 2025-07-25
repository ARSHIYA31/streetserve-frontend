import { Supplier, Ingredient } from '../types';

export const mockIngredients: Ingredient[] = [
  { id: '1', name: 'Onions', pricePerKg: 30, minOrderKg: 5, emoji: '🧅' },
  { id: '2', name: 'Tomatoes', pricePerKg: 40, minOrderKg: 3, emoji: '🍅' },
  { id: '3', name: 'Potatoes', pricePerKg: 25, minOrderKg: 10, emoji: '🥔' },
  { id: '4', name: 'Green Chillies', pricePerKg: 80, minOrderKg: 1, emoji: '🌶️' },
  { id: '5', name: 'Coriander', pricePerKg: 60, minOrderKg: 1, emoji: '🌿' },
  { id: '6', name: 'Mint Leaves', pricePerKg: 40, minOrderKg: 1, emoji: '🌿' },
  { id: '7', name: 'Basmati Rice', pricePerKg: 45, minOrderKg: 25, emoji: '🌾' },
  { id: '8', name: 'Turmeric Powder', pricePerKg: 120, minOrderKg: 1, emoji: '🟡' },
  { id: '9', name: 'Red Chilli Powder', pricePerKg: 150, minOrderKg: 1, emoji: '🌶️' },
  { id: '10', name: 'Cumin Seeds', pricePerKg: 180, minOrderKg: 1, emoji: '🟤' },
];

export const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Fresh Veggie Mart',
    location: 'Azadpur Mandi',
    rating: 4.8,
    deliveryTime: '2-3 hours',
    deliveryAvailable: true,
    products: [
      mockIngredients[0], // Onions
      mockIngredients[1], // Tomatoes
      mockIngredients[2], // Potatoes
      mockIngredients[3], // Green Chillies
    ]
  },
  {
    id: '2',
    name: 'Green Valley Suppliers',
    location: 'Connaught Place',
    rating: 4.6,
    deliveryTime: '1-2 hours',
    deliveryAvailable: true,
    products: [
      mockIngredients[1], // Tomatoes
      mockIngredients[4], // Coriander
      mockIngredients[5], // Mint Leaves
    ]
  },
  {
    id: '3',
    name: 'Grain Masters',
    location: 'Karol Bagh',
    rating: 4.9,
    deliveryTime: '4-6 hours',
    deliveryAvailable: true,
    products: [
      mockIngredients[6], // Basmati Rice
    ]
  },
  {
    id: '4',
    name: 'Spice Kingdom',
    location: 'Chandni Chowk',
    rating: 4.7,
    deliveryTime: '3-4 hours',
    deliveryAvailable: true,
    products: [
      mockIngredients[7], // Turmeric Powder
      mockIngredients[8], // Red Chilli Powder
      mockIngredients[9], // Cumin Seeds
    ]
  },
  {
    id: '5',
    name: 'Farm Direct',
    location: 'Lajpat Nagar',
    rating: 4.5,
    deliveryTime: '2-4 hours',
    deliveryAvailable: false,
    products: [
      mockIngredients[0], // Onions
      mockIngredients[2], // Potatoes
      mockIngredients[3], // Green Chillies
    ]
  },
  {
    id: '6',
    name: 'Herb House',
    location: 'Khan Market',
    rating: 4.4,
    deliveryTime: '1-3 hours',
    deliveryAvailable: true,
    products: [
      mockIngredients[4], // Coriander
      mockIngredients[5], // Mint Leaves
    ]
  }
];