import styles from "../styles/InternshipExp.module.css";
import { getName } from "../util/functions";
import SkillIcons from "./SkillIcons";
import Image from "next/image";

const InternshipExp = ({ item }) => {
  return (
    <div className={styles.intern + " card-white"}>
      <a href={item.site ? item.site : ""} target="_blank" rel="noreferrer">
        <div className={styles.unsetImg}>
          <Image
            src={"/images/internships/" + item.id + ".png"}
            alt={item.id + " Logo"}
            layout="fill"
            className={styles.customImg}
          />
        </div>
      </a>
      <div className={styles.innerContainer}>
        <p className="c-blue">
          {item.role} at{" "}
          {item.site ? (
            <a
              className={styles.site}
              href={item.site ? item.site : ""}
              target="_blank"
              rel="noreferrer"
            >
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </p>
        <h4>
          {item.from} - {item.to}
        </h4>
        <p>{item.desc}</p>
        <div className="skills">
          <h4>Technologies used</h4>
          <div className="list">
            {item.tech.map((item) => (
              <SkillIcons
                key={item}
                name={getName(item)}
                icon={`/images/${item}.png`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipExp;
