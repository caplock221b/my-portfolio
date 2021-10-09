import Head from "next/head";
import { useEffect } from "react";
import SkillIcons from "../components/SkillIcons";
import { scrollToTop } from "../util/functions";
import {
  progLang,
  frontendTech,
  backendTech,
  databases,
  otherTech,
} from "../util/homeData";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Portfolio</title>
        <meta name="description" content="Atharva Jangada's Portfolio" />
      </Head>
      <div className="intro-container card-white">
        <div className="unset-img">
          <Image
            alt="Profile Photo"
            src="/images/me.jpeg"
            layout="fill"
            className="custom-img"
          />
        </div>
        <div className="intro">
          <p className="c-blue">About Me</p>
          <p>
            Hi there! My name is <b>Atharva Jangada</b>.
          </p>
          <p>
            I am an undergraduate student, currently studying in Pune, India.
          </p>
          <p>
            I am a <b>full-stack web developer</b> and I have keen interest in{" "}
            <b>blockchain technologies</b>.
          </p>
          <p>
            My hobbies include playing chess and cricket, sketching and
            binge-watching movies and TV shows.
          </p>
        </div>
      </div>
      <div className="skills-container">
        <div className="card-white">
          <p className="c-blue">My current skills include</p>
          <div className="skills">
            <h3>Programming Languages</h3>
            <div className="list">
              {progLang.map((item) => (
                <SkillIcons key={item.icon} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="skills">
            <h3>Frontend Technologies</h3>
            <div className="list">
              {frontendTech.map((item) => (
                <SkillIcons key={item.icon} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="skills">
            <h3>Backend Technologies</h3>
            <div className="list">
              {backendTech.map((item) => (
                <SkillIcons key={item.icon} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="skills">
            <h3>Database Knowledge</h3>
            <div className="list">
              {databases.map((item) => (
                <SkillIcons key={item.icon} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
          <div className="skills">
            <h3>Dev Tools I work with</h3>
            <div className="list">
              {otherTech.map((item) => (
                <SkillIcons key={item.icon} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
