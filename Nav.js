import "./App.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./App.css"
let Nav = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setDivVisibility(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isDivVisible, setDivVisibility] = useState(false);

    const handleClick = () => {
        setDivVisibility(!isDivVisible);
    };

    return (
        <div>
            {
                windowWidth > 650 &&
                <nav>
                    <div className="logo">
                        <img src="https://img.freepik.com/premium-vector/portfolio-illustration-transparent-background_565844-153.jpg?w=2000" alt="" />
                    </div>
                    <div className="link">
                        <Link to="/" className="links">About</Link>
                        <AnchorLink href="#skills" className="links">Skills</AnchorLink>
                        <AnchorLink href="#education" className="links">Education</AnchorLink>
                        <AnchorLink href="#contact" className="links">Contact</AnchorLink>
                    </div>
                    <div className="icons">
                        <Link to="https://www.hackerrank.com/profile/pavankalyandeep2"><i class="fa-brands fa-hackerrank"></i></Link>
                    </div>
                </nav>
            }
            {
                windowWidth <= 650 &&
                <div className="small-nav">
                    <div><i class="fa-solid fa-bars" onClick={handleClick}></i></div>
                    <div className="small-icons">
                        <Link to="https://www.hackerrank.com/profile/pavankalyandeep2"><i class="fa-brands fa-hackerrank"></i></Link>
                    </div>
                    {
                        isDivVisible &&
                        <div className="side-nav">
                            <Link to="/" onClick={handleClick} className="links side">About</Link>
                            <AnchorLink href="#skills" onClick={handleClick} className="links">Skills</AnchorLink>
                            <AnchorLink href="#education" onClick={handleClick} className="links">Education</AnchorLink>
                            <AnchorLink href="#contact" onClick={handleClick} className="links">Contact</AnchorLink>
                        </div>
                    }
                </div>

            }
        </div>
    )
}
export default Nav