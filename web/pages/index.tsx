function LandingPage() {
    return (
        <div className="LandingBg">
            <nav>
                <a href="#" id="login">Login</a>
            </nav>

            <style jsx>{`
                #login {
                    background-color: hsl(187, 62%, 53%);
                    border: none;
                    text-align: center;
                    text-decoration: none;
                    padding: 1rem .5rem;
                    cursor: pointer;
                    color: white;
                    &:hover {
                        background-color: hsl(198, 59%, 56%);
                    }
                }
            `}</style>
        </div>
    );
}

export default LandingPage;