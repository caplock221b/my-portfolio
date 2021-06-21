import styles from "../styles/SkillIcons.module.css"

const SkillIcons = ({ name, icon }) => {
    return (
        <div className={styles.icons}>
            <img src={icon} alt={name} />
            <span className={styles.tooltipText}>{name}</span>
        </div>
    );
}
 
export default SkillIcons;