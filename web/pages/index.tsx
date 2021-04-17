function LandingPage() {
    return (
        <div className="landing-bg">
            <header>
                <a href="#" className="logo">A+ERP</a>
                <div className="pseudo-buttons">
                    <a href="/login">Sign In</a>
                    <a href="/signup" className="sign-up">Try It</a>
                </div>
                <ul>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                </ul>
            </header>

            <style jsx>{`
                .landing-bg {
                    header {
                        background-color: black;
                        width: 100vw;
                        padding: 1rem;
                        .logo {
                            color: white;
                            float: left;
                        }
                        .pseudo-buttons {
                            float: right;
                            a {
                                color: white;
                                padding: .5rem 1rem;
                            }
                            .sign-up {
                                background-color: hsl(187, 62%, 53%);
                                border: none;
                                text-align: center;
                                text-decoration: none;
                                cursor: pointer;
                                color: white;
                                &:hover {
                                    background-color: hsl(198, 59%, 56%);
                                }
                            }
                        }
                        ul {
                            margin: 0 auto;
                            padding: 0;
                            text-align: center;
                            li {
                                color: white;
                                margin: {
                                    left: .5rem;
                                    right: .5rem;
                                } 
                            }
                        }
                    }
                }
            `}</style>
        </div>
    );
}

export default LandingPage;