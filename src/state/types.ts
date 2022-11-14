export interface Product {
  id: number;
  name: string;
  amount: string;
  unit: string;
  farmAddress: string;
  farmerAddress: string;
  setId: number;
}

export interface ProductState {
  products: Product[];
}
