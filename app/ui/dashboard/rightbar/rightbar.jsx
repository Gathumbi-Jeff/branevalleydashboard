import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>AI Summarized Support Report 12th Jan 2024🔥</span>
          <h3 className={styles.title}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
           </h3>
          <span className={styles.subtitle}>Takes 4 minutes to Read</span>
          <p className={styles.desc}>
          Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Share
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>AI Summarized Support Report 11th Jan 2024🚀</span>
          <h3 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to read.</span>
          <p className={styles.desc}>
          Navigating across multiple root layouts will cause a full page load (as opposed to a client-side navigation). For example, navigating from /cart that uses app/(shop)/layout.js to /blog that uses app/(marketing)/layout.js will cause a full page load. This only applies to multiple root layouts
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;