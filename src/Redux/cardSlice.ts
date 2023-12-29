
import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image:string;
  
}


const initialState: CartItem[] = loadCartFromStorage();

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity,image } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ id, title, price, quantity,image });
      }

      saveCartToStorage(state); 
    },
  },
});


function loadCartFromStorage(): CartItem[] {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
}


function saveCartToStorage(cart: CartItem[]): void {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
