import Head from 'next/head';
import { useEffect } from "react";
import { db } from '../../util/firebase';
import { scrollToTop } from "../../util/functions";
import InternshipExp from '../../components/InternshipExp';

export const getStaticProps = async () => {
    let allInfo = []
    try{
        const querySnapshot = await db.collection('internships').orderBy('position', 'desc').get()
        querySnapshot.forEach(doc => {
            allInfo.push({
                ...doc.data()
            })
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

const Internships = ({ info }) => {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <>
            <Head>
                <title>Internships | Portfolio</title>
            </Head>
            <div className="intern-container">
                <div className="title">My Internships</div>
                {
                    info.map(item => (
                        <InternshipExp key={item.position} item={item} />
                    ))
                }
            </div>
        </>
    );
}
 
export default Internships;