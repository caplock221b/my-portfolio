import styles from '../styles/EduItem.module.css'

const EduItem = ({ item }) => {
    return (
        <div className={styles.eduItem + " card-white"}>
            <img src={`/images/education/${item.id}.png`} alt={item.id} />
            <div className={styles.eduInfo}>
                <div className={styles.block}>
                    <span>Qualification</span>
                    <p>{ item.type }</p>
                </div>
                <div className={styles.block}>
                    <span>Institution</span>
                    <p>{ item.name }</p>
                </div>
                <div className={styles.block}>
                    <span>Period</span>
                    <p>{ `${item.from} - ${item.to}` }</p>
                </div>
                <div className={styles.block}>
                    <span>City</span>
                    <p>{ item.city }</p>
                </div>
                <div className={styles.block}>
                    <span>Percentage / GPA</span>
                    <p>{ item.percentage ? `${item.value}%` : `CGPA ${item.value}` }</p>
                </div>
            </div>
        </div>
    );
}
 
export default EduItem;