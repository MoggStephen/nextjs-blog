import styles from './alert.module.css';
import { clsx } from 'clsx';
// NOT IN USE
// <Alert children={<h1>child</h1>} type="success"/>
export default function Alert({ children, type }) {
  return (
    <div
      className={clsx({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}