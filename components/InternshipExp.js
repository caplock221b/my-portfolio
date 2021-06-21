import styles from '../styles/InternshipExp.module.css'
import { getName } from '../util/functions';
import SkillIcons from './SkillIcons';

const InternshipExp = ({ item }) => {
    return (
        <div className={styles.intern + " card-white"}>
            <a href={item.site ? item.site : ""} target="_blank"><img src={"/images/internships/" + item.id + ".png"} alt={item.id + " Logo"} /></a>
            <div className={styles.innerContainer}>
                <p className="c-blue">{ item.role } at <a className={styles.site} href={item.site ? item.site : ""}>{ item.name }</a></p>
                <h4>{ item.from } - { item.to }</h4>
                <p>{ item.desc }</p>
                <div className="skills">
                    <h4>Technologies used</h4>
                    <div className="list">
                        {
                            item.tech.map(item => (
                                <SkillIcons key={item} name={getName(item)} icon={`/images/${item}.png`} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default InternshipExp;