import { faBars, faBriefcase, faGraduationCap, faHome, faPhoneAlt, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const navbarLinks = [
    {
        id: 0,
        title: 'Home',
        link: '/',
        icon: faHome
    },
    {
        id: 1,
        title: 'Education',
        link: '/education',
        icon: faGraduationCap
    },
    {
        id: 2,
        title: 'Projects',
        link: '/projects',
        icon: faProjectDiagram
    },{
        id: 3,
        title: 'Internships',
        link: '/internships',
        icon: faBriefcase
    },{
        id: 4,
        title: 'Connect',
        link: '/connect',
        icon: faPhoneAlt
    },
]

const Layout = ({ children }) => {
    const router = useRouter()
    const [active, setActive] = useState([true, false, false, false, false])
    const [hideMenu, setHideMenu] = useState(true)

    useEffect(() => {
        switch(router.route){
            case '/':
                break;
            case '/education':
                setActive([false, true, false, false, false])
                break;
            case '/projects':
                setActive([false, false, true, false, false])
                break;
            case '/internships':
                setActive([false, false, false, true, false])
                break;
            case '/connect':
                setActive([false, false, false, false, true])
                break;
            default:
                setActive([false, false, false, false, false])
                break;
        }
    }, [])

    const handleNavClick = ind => {
        let newVal = [false, false, false, false, false]
        newVal[ind] = true
        setHideMenu(true)
        setActive(newVal)
    }

    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">{`<AJ />`}</div>
                <ul className={`nav-ul ${hideMenu ? 'hide' : ''}`}>
                    {
                        navbarLinks.map(item => (
                            <li key={item.id} className={active[item.id] ? 'active' : ''}>
                                <Link href={item.link}>
                                    <a onClick={() => handleNavClick(item.id)}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span>{ item.title }</span>
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="bars" onClick={() => setHideMenu(val => !val)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
            <div className="content">
                { children }
            </div>
        </div>
    );
}
 
export default Layout;