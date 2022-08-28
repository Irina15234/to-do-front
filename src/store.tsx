import { rootReducer } from './slices';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
