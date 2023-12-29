import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description:string;
  rating:Rating
 
}



export const fetchProducts = createAsyncThunk<Product[]>('products/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const productSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});


export const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});





export default productSlice.reducer;
  