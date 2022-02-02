import arkcheckincs from 'assets/img/ark-checkin-cs.png';
import arkcomingsoon from 'assets/img/ark-comingsoon.png';
import './styles.css';

function Checkin() {
    return (
        <>
            <div className="checkin">
                <div className="container-checkin">
                    <img className="img-fluid top" src={arkcheckincs} alt="inf" />
                    <img className="img-fluid" src={arkcomingsoon} alt="inf" />
                </div>
            </div>
        </>
    )
}

export default Checkin;