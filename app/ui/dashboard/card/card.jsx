import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from "./card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Issues</span>
        <span className={styles.number}>132</span>
        <span className={styles.detail}></span>
        <span>
          <span className={styles.positive}>12%</span> More than previous month.
        </span>
      </div>
    </div>
  );
};

export default Card;