import './styles.css';

function PlayMine() {
    return (
        <>
            <div className="playMine">
                <div className="container-play">
                    <div className="border-container">


                        <div className="content-left">
                            <div className="ship-img"></div>
                            <span className="isEmpty">EMPTY</span>
                        </div>
                        <div className="content-left">
                            <div className="ship-img"></div>
                            <span className="isEmpty">EMPTY</span>
                        </div>
                        <div className="content-left">
                            <div className="ship-img"></div>
                            <span className="isEmpty">EMPTY</span>
                        </div>
                        <div className="content-left">
                            <div className="ship-img"></div>
                            <span className="isEmpty">EMPTY</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayMine;