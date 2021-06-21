import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useEffect } from "react";
import { scrollToTop } from "../../util/functions";

const Connect = () => {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <>
            <Head>
                <title>Connect | Portfolio</title>
            </Head>
            <div className="connect-container">
                <div className="title">Let's Connect</div>
                <div className="inner-container">
                    <div className="card-white connect">
                        <p className="c-blue">What do I offer?</p>
                        <p>I can help you out with building websites and designing mockups.</p>
                        <p>I can help you convert your idea into code.</p>
                        <p>If nothing else, we can have a friendly conversation at least! :{`)`}</p>
                    </div>
                    <div className="socials">
                        <div className="handles">
                            <div className="handle card-white">
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>Gmail</span>
                                </span>
                                <span className="handle-link"><a href="mailto:atharvajangada@gmail.com">atharvajangada</a></span>
                            </div>
                            <div className="handle card-white">
                                <span>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <span>LinkedIn</span>
                                </span>
                                <span className="handle-link"><a href="https://www.linkedin.com/in/atharva-jangada" target="_blank">/atharva-jangada</a></span>
                            </div>
                            <div className="handle card-white">
                                <span>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <span>GitHub</span>
                                </span>
                                <span className="handle-link"><a href="https://github.com/caplock221b" target="_blank">/caplock221b</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Connect;