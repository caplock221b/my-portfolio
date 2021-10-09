import { db } from "../../util/firebase";
import Head from "next/head";
import ProjectItem from "../../components/ProjectItem";
import { useEffect } from "react";
import { scrollToTop } from "../../util/functions";

export const getStaticProps = async () => {
  let allInfo = [];
  try {
    const querySnapshot = await db.collection("projects").get();
    querySnapshot.forEach((doc) => {
      allInfo.push({ ...doc.data() });
    });
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      info: allInfo,
    },
  };
};

const Projects = ({ info }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Projects | Portfolio</title>
        <meta name="description" content="Atharva Jangada's Portfolio" />
      </Head>
      <div className="outer-container">
        <div className="title">My Projects</div>
        <div className="project-container">
          {info.map((item) => (
            <ProjectItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
