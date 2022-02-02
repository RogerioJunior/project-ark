import arkexchangecs from 'assets/img/ark-exchange-cs.png';
import arkcomingsoon from 'assets/img/ark-comingsoon.png';
import './styles.css';

function Exchange() {
    return (
        <>
            <div className="exchange">
                <div className="container-exchange">
                    <img className="img-fluid top" src={arkexchangecs} alt="inf" />
                    <img className="img-fluid" src={arkcomingsoon} alt="inf" />
                </div>
            </div>
        </>
    )
}

export default Exchange;