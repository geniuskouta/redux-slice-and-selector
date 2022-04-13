import React from 'react';
import { CounterSlice } from '../../states/slices';
import { CounterSelector } from '../../states/selectors';
import { useDispatch, useSelector } from 'react-redux';

import styles from './index.module.css';

export function Counter() {
  const counter = useSelector(CounterSelector.getCount);

  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(CounterSlice.decrement());
  }

  const handleIncrement = () => {
    dispatch(CounterSlice.increment());
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
