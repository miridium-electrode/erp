type prop = {
    children: React.ReactNode
};

function Background(props: prop) {
    return (
        <div className="bg">
            {props.children}
        </div>
    )
}

export default Background;