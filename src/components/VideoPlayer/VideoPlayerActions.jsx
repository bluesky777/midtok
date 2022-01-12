import { Heart } from '../Icons/Heart.jsx';
import styles from './styles.module.css';

export default function VideoPlayerAction() {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart></Heart>
      </div>
      <div className={styles.action}>
        <Heart></Heart>
      </div>
      <div className={styles.action}>
        <Heart></Heart>
      </div>
    </aside>
  );
}
