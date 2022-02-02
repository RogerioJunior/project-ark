import ShipCard from "components/ShipCard";
import './styles.css';

function Upgrade() {
    return (
        <>
            <div className="upgrade">
                <div className="container-upgrade">
                    <div className="border-container">
                        <ShipCard />
                    </div>
                    <div className="content-upgrade">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upgrade;