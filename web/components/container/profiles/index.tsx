interface ProfileProp {
    left: React.ReactFragment;
    right: React.ReactFragment;
}

function Container(props: ProfileProp) {
    return (
        <main>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    div {
                        display: flex;
                        flex-direction: row;
                    }
                }
            `}</style>
        </main>
    );
}

export default Container;