import arkPlayBtn from 'assets/img/ark-play.png';
import arkInfoBtn from 'assets/img/ark-info.png';
import arkMarketBtn from 'assets/img/ark-market.png';
import arkUpgradeBtn from 'assets/img/ark-upgrade.png';
import arkCheckinBtn from 'assets/img/ark-checkin.png';
import arkExchangeBtn from 'assets/img/ark-exchange.png';
import arkMedalBtn from 'assets/img/ark-medal.png';
import arkbar from 'assets/img/ark-bar.png';
import arkicon1 from 'assets/img/ark-icon-1.png';
import arkicon2 from 'assets/img/ark-icon-2.png';
import arkicon3 from 'assets/img/ark-icon-3.png';
import arkicon4 from 'assets/img/ark-icon-4.png';
import { Link } from "react-router-dom";
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={`/play`}>
                        <img className="navbar-brand" src={arkPlayBtn}
                            width="170" height="60" alt="play" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav me-1">
                            <li className="nav-item">
                                <img className="nav-link" src={arkInfoBtn}
                                    width="50" height="50" alt="info" />
                            </li>
                        </ul>

                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/hangar`}>
                                    <span className="navbar-text">HANGAR</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/refinary`}>
                                    <span className="navbar-text">REFINARY</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/store`}>
                                    <span className="navbar-text">STORE</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/market`}>
                                    <img src={arkMarketBtn}
                                        width="35" height="35" alt="market" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/upgrade`}>
                                    <img src={arkUpgradeBtn}
                                        width="35" height="35" alt="upgrade" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/checkin`}>
                                    <img src={arkCheckinBtn}
                                        width="35" height="35" alt="checkin" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/exchange`}>
                                    <img src={arkExchangeBtn}
                                        width="35" height="35" alt="exchange" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/medal`}>
                                    <img src={arkMedalBtn}
                                        width="35" height="35" alt="medal" />
                                </Link>
                            </li>
                        </ul>

                        <img className="bar" src={arkbar} height="35" alt="bar" />

                        <ul className="navbar-nav scores ms-2">
                            <h6>
                                <img className="icon" src={arkicon1} width="17" height="17" alt="icon1" />
                                0.0000.000
                            </h6>
                            <h6>
                                <img className="icon" src={arkicon3} width="17" height="17" alt="icon3" />
                                0.0000.000
                            </h6>
                        </ul>

                        <ul className="navbar-nav scores ms-2">
                            <h6>
                                <img className="icon" src={arkicon2} width="17" height="17" alt="icon2" />
                                0.0000.000
                            </h6>
                            <h6>
                                <img className="icon" src={arkicon4} width="17" height="17" alt="icon4" />
                                0.0000.000
                            </h6>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );

}

export default Navbar; 