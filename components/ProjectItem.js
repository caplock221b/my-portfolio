import Link from 'next/link'
import styles from '../styles/ProjectItem.module.css'

const ProjectItem = ({ item }) => {
    return (
        <Link href={`/projects/${item.id}`}>
            <a className={styles.indProject} >
                <div className={styles.project}>
                    <img src={`/images/projects/${item.id}.png`} alt={item.id} />
                    <div className={styles.appear}>
                        {item.name}
                    </div>
                </div>
            </a>
        </Link>
    );
}
 
export default ProjectItem;