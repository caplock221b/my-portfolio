import { db } from '../../util/firebase'
import Head from 'next/head'
import EduItem from '../../components/EduItem'
import { useEffect } from 'react'
import { scrollToTop } from '../../util/functions'

export const getStaticProps = async () => {
    let allInfo = []
    try{
        const querySnapshot = await db.collection('education').orderBy('to', 'desc').get()
        querySnapshot.forEach(doc => {
            allInfo.push({...doc.data()})
        })
    }
    catch(err){
        console.log(err);
    }
    return {
        props: {
            info: allInfo
        }
    }
}

const Education = ({ info }) => {
    useEffect(() => {
        scrollToTop()
    }, [])
    
    return (
        <>
            <Head>
                <title>Education | Portfolio</title>
            </Head>
            <div className="edu-container">
                <div className="title">My Education</div>
                {
                    info.map(item => (
                        <EduItem key={item.id} item={item} />
                    ))
                }
            </div>
        </>
    );
}

export default Education;