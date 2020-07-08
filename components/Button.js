import styles from '../styles/Button.module.css';
import { Children } from 'react';

export function Button({ children }) {
  return (
    <button
      type='button'
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.alpha}>
      {children}
    </button>
  );
}
