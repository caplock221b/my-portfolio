import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SkillIcons from '../../components/SkillIcons'
import { db } from '../../util/firebase'
import { getName, scrollToTop } from '../../util/functions'
import Image from 'next/image'

export const getStaticPaths = async () => {
    let paths = []
    try{
        const querySnapshot = await db.collection('projects').get()
        querySnapshot.forEach(doc => {
            paths.push({
                params: {
                    id: doc.data().id,
                    name: 'hello'
                }
            })
        })
    }
    catch(err){
        console.log("Error " + err);
    }

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    let snapshot = null
    try{
        console.log("Logging context");
        console.log(context);
        const projectRef = db.collection('projects')
        snapshot = await projectRef.where('id', '==', context.params.id ).get()
    }
    catch(err){
        console.log("Error " + err);
    }
    if(snapshot.empty){
        console.log("no matching docs");
        return {
            props: {}
        }
    }
    else{
        let values = {}
        snapshot.forEach(doc => {
            values = {
                ...doc.data()
            }
        })
        return {
            props: {
                ...values
            }
        }
    }
}


const ProjectDetails = props => {
    const router = useRouter()
    
    useEffect(() => {
        scrollToTop()
    }, [])

    const handleGoBack = () => {
        router.push('/projects')
    }
    
    return (
        <>
            <Head>
                <title>{props.name} | Projects | Portfolio</title>
                <meta name="description" content="Atharva Jangada's Portfolio" />
            </Head>
            <div className="project-details-container">
                <div className="go-back" onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Go Back</span>
                </div>
                <div className="card-white">
                    <p className="c-blue">{ props.name }</p>
                    <p className="desc">{ props.desc }</p>
                    <p>
                        {
                            props.live ?
                            <a className="go-links" href={props.live} target="_blank" rel="noreferrer">Visit Site</a> : null
                        }
                    </p>
                    <p>
                        {
                            props.code ?
                            <a className="go-links" href={props.code} target="_blank" rel="noreferrer">Visit Code</a> : null
                        }
                    </p>
                    <div className="skills">
                        <h3>Technologies used</h3>
                        <div className="list">
                            {
                                props.tech.map(item => (
                                    <SkillIcons key={item} name={getName(item)} icon={`/images/${item}.png`} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="unset-img">
                    <Image 
                        alt={props.id} 
                        src={`/images/projects/${props.id}.png`} 
                        layout="fill" 
                        className="custom-img"
                    />
                </div>
            </div>
        </>
    );
}
 
export default ProjectDetails;