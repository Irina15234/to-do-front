import { rootReducer } from './slices';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({ reducer: rootReducer });
