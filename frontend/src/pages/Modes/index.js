import arkmineplay from 'assets/img/ark-mine-btn.png';
import arkpveplay from 'assets/img/ark-pve-btn.png';
import arkpvpplay from 'assets/img/ark-pvp-btn.png';
import { Link } from "react-router-dom";
import './styles.css';

function Modes() {
    return (
        <>
            <section id="modes" className="grid-modes modes">
                <div className="main-content grid-modes-content">
                    <div className="grid">
                        <div className="modes-btn">
                            <Link to={`/playMine`}>
                                <img src={arkmineplay} alt="mine" />
                            </Link>
                        </div>
                        <div className="modes-btn">
                                <img src={arkpveplay} alt="pve" />
                                <h2 className="grid-modes-footer">Q2</h2>
                        </div>
                        <div className="modes-btn">
                                <img src={arkpvpplay} alt="pvp" />
                                <h2 className="grid-modes-footer">Q4</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modes;