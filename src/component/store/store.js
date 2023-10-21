import searchReducer from './search'
import loadReducer from './load'
import { configureStore } from '@reduxjs/toolkit';
export const store=configureStore({
  
    reducer:{
      load: loadReducer,
      search:searchReducer,
      
    }
  })