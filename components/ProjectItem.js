import Link from 'next/link'
import styles from '../styles/ProjectItem.module.css'
import Image from 'next/image'

const ProjectItem = ({ item }) => {
    return (
        <Link href={`/projects/${item.id}`}>
            <a className={styles.indProject} >
                <div className={styles.project}>
                    <div className="unset-img">
                        <Image 
                            alt={item.id} 
                            src={`/images/projects/${item.id}.png`} 
                            layout="fill" 
                            className="custom-img"
                        />
                    </div>
                    <div className={styles.appear}>
                        {item.name}
                    </div>
                </div>
            </a>
        </Link>
    );
}
 
export default ProjectItem;