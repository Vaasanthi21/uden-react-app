import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from '../features/counter/counterSlice';
import { api } from '../services/apiServices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);
