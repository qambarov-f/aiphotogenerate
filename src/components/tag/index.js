"use client";
import styles from "./styles.module.scss";

function Tag({ title, onClick }) {
  const handleCLick = () => {
    if (onClick) {
      onClick(title);
    }
  };

  return (
    <button className={styles.tag} onClick={handleCLick}>
      {title}
    </button>
  );
}

export { Tag };
