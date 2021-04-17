type prop = {
    children: React.ReactNode
};

function Background(props: prop) {
    return (
        <div>
            {props.children}

            <style jsx>{`
                div {
                    width: 100vw;
                    height: 100vh;
                    display: grid;
                    place-items: center;
                }
            `}</style>
        </div>
    )
}

export default Background;