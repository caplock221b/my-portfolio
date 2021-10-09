import styles from "../styles/EduItem.module.css";
import Image from "next/image";

const EduItem = ({ item }) => {
  return (
    <div className={styles.eduItem + " card-white"}>
      <div className={styles.unsetImg}>
        <Image
          src={`/images/education/${item.id}.png`}
          alt={item.id}
          layout="fill"
          className={styles.customImg}
        />
      </div>
      <div className={styles.eduInfo}>
        <div className={styles.block}>
          <span>Qualification</span>
          <p>{item.type}</p>
        </div>
        <div className={styles.block}>
          <span>Institution</span>
          <p>{item.name}</p>
        </div>
        <div className={styles.block}>
          <span>Period</span>
          <p>{`${item.from} - ${item.to}`}</p>
        </div>
        <div className={styles.block}>
          <span>City</span>
          <p>{item.city}</p>
        </div>
        <div className={styles.block}>
          <span>Percentage / GPA</span>
          <p>{item.percentage ? `${item.value}%` : `CGPA ${item.value}`}</p>
        </div>
      </div>
    </div>
  );
};

export default EduItem;
