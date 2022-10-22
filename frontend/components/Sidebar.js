import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <>
            <nav className={isOpen ? "open" : ""}>
                <div className="logo">
                    <i
                        className="bx bx-menu menu-icon"
                        onClick={toggleOpen}
                    ></i>
                    <span className="logo-name">Learn Coding</span>
                </div>

                <div className="sidebar">
                    <div className="logo">
                        <i
                            className="bx bx-menu menu-icon"
                            onClick={toggleOpen}
                        ></i>
                        <span className="logo-name">Learn Coding</span>
                    </div>

                    <div className="sidebar-content">
                        <ul className="lists">
                            <li className="list">
                                <Link href={"/"}>
                                    <a
                                        className="nav-link"
                                        onClick={handleClose}
                                    >
                                        <i className="bx bx-home-alt icon"></i>
                                        <span className="link">Home</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="list">
                                <Link href={"/lesson"}>
                                    <a
                                        className="nav-link"
                                        onClick={handleClose}
                                    >
                                        <i className="bx bx-bar-chart-alt-2 icon"></i>
                                        <span className="link">Learn</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="list">
                                <a
                                    href="https://learncodeteam.blogspot.com"
                                    className="nav-link"
                                >
                                    <i className="bx bx-message-rounded icon"></i>
                                    <span className="link">News</span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="404.html" className="nav-link">
                                    <i className="bx bx-pie-chart-alt-2 icon"></i>
                                    <span className="link">About</span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="404.html" className="nav-link">
                                    <i className="bx bx-heart icon"></i>
                                    <span className="link">Developer</span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="404.html" className="nav-link">
                                    <i className="bx bx-folder-open icon"></i>
                                    <span className="link">Sampel</span>
                                </a>
                            </li>
                        </ul>

                        <div className="bottom-cotent">
                            <li className="list">
                                <a href="404.html" className="nav-link">
                                    <i className="bx bx-cog icon"></i>
                                    <span className="link">Settings</span>
                                </a>
                            </li>
                            <li className="list">
                                <a href="404.html" className="nav-link">
                                    <i className="bx bx-log-out icon"></i>
                                    <span className="link">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            <section className="overlay" onClick={handleClose}></section>
        </>
    )
}
