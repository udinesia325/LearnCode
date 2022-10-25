import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div
            id="header"
            align="center"
            style={{
                paddingTop: "100px",
                paddingBottom: "100px",
            }}
        >
            <p align="center" style={{ margin: "0" }}>
            </p>
            <h1
                id="main_title"
                style={{
                    textShadow: " 3px 3px 1px rgb(215, 215, 215)",
                    margin: "2px",
                }}
            >
                Learn Code - Your Guide Of Programming
            </h1>
            <a
                href="index.html"
                className="btn"
                style={{
                    background: "#3479AB",
                }}
                onmouseover="btn_title_show('Main page of this website') "
                onmouseout="btn_title_show('')"
            >
                <span
                    style={{
                        fontSize: "50px",
                    }}
                    className="fa fa-home"
                ></span>
                <br />
                HOME
            </a>
						<Link href={"/lesson"}>
            <a
                
                className="btn"
                style={{ background: "#4CAF50" }}
                onmouseover="btn_title_show('Free Learn code')"
                onmouseout="btn_title_show('')"
            >
                <span
                    style={{
                        fontSize: "50px",
                    }}
                    className="fa fa-rocket"
                ></span>
                <br />
                LEARN
            </a>
								</Link>
            <a
                href="404.html"
                className="btn"
                style={{
                    background: "#E91E63",
                }}
                onmouseover="btn_title_show('Free learn code')"
                onmouseout="btn_title_show('')"
            >
                <span
                    style={{
                        fontSize: "50px",
                    }}
                    className="fa fa-gamepad"
                ></span>
                <br />
                SAMPEL
            </a>
            <a
                href="https://learncodeteam.blogspot.com"
                className="btn"
                style={{
                    background: "#673AB7",
                }}
                onmouseover="btn_title_show('Last news about android and apps development')"
                onmouseout="btn_title_show('')"
            >
                <span
                    style={{
                        fontSize: "50px",
                    }}
                    className="fa fa-newspaper-o"
                ></span>
                <br />
                NEWS
            </a>
            <a
                href="#"
                className="btn"
                style={{
                    background: "#FF9800",
                }}
                onmouseover="btn_title_show('Some information about this website')"
                onmouseout="btn_title_show('')"
                onClick="about_dialog_show()"
            >
                <span
                    style={{
                        fontSize: "50px",
                    }}
                    className="fa fa-user"
                ></span>
                <br />
                ABOUT
            </a>
            <p
                id="btn_title"
                style={{
                    position: "absolute",
                    left: "100px",
                    right: "100px",
                }}
            ></p>
        </div>
    )
}
