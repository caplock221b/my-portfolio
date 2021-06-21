import styles from "../styles/SkillIcons.module.css"
import Image from 'next/image'

const SkillIcons = ({ name, icon }) => {
    return (
        <div className={styles.icons}>
            <div className="unset-img">
                <Image 
                    alt={name} 
                    src={icon} 
                    layout="fill" 
                    className="custom-img"
                />
            </div>
            <span className={styles.tooltipText}>{name}</span>
        </div>
    );
}
 
export default SkillIcons;