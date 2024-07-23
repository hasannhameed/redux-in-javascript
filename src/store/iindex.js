import { configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlicer from './auth';

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlicer }
});



export default store;
