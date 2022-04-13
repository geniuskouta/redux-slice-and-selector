import { CombinedState, combineReducers } from 'redux';
import { AnyAction, configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import { CounterSlice } from './slices';

const rootReducer = combineReducers({
  counter: CounterSlice.reducer
})

const store = configureStore({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducer: (state: CombinedState<any>, action: AnyAction) => {
    return rootReducer(state, action);
  },
  middleware: [thunk],
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
