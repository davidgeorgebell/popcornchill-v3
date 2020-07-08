import styles from '../styles/Button.module.css';

export function Button() {
  return (
    <button
      type='button'
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.alpha}>
      OIOI
    </button>
  );
}
