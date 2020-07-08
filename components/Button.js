import styles from '../styles/utils.module.css';

export function Button({ children }) {
  return (
    <button
      type='button'
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.alphaBtn}>
      {children}
    </button>
  );
}
