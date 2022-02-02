import ShipCard from "components/ShipCard";
import './styles.css';

function PlayMine() {
    return (
        <>
            <div className="playMine">
                <div className="container-play">
                    <div className="border-container">
                        <ShipCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayMine;