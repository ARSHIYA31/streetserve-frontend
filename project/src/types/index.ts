export interface Ingredient {
  id: string;
  name: string;
  pricePerKg: number;
  minOrderKg: number;
  emoji: string;
}

export interface Supplier {
  id: string;
  name: string;
  location: string;
  rating: number;
  deliveryTime: string;
  deliveryAvailable: boolean;
  products: Ingredient[];
}

export interface CartItem {
  supplier: Supplier;
  ingredient: Ingredient;
  quantity: number;
}