import arkbar from 'assets/img/ark-bar.png';
import arkicon1 from 'assets/img/ark-icon-1.png';
import arkicon2 from 'assets/img/ark-icon-2.png';
import arkicon3 from 'assets/img/ark-icon-3.png';
import arkicon4 from 'assets/img/ark-icon-4.png';
import { ReactComponent as ArkPlayOff } from 'assets/img/ark-play-off.svg';
import { ReactComponent as ArkInfoOff } from 'assets/img/ark-info-off.svg';
import { ReactComponent as ArkMarketOff } from 'assets/img/ark-market-off.svg';
import { ReactComponent as ArkUpgradeOff } from 'assets/img/ark-upgrade-off.svg';
import { ReactComponent as ArkCheckinOff } from 'assets/img/ark-checkin-off.svg';
import { ReactComponent as ArkExchangeOff } from 'assets/img/ark-exchange-off.svg';
import { ReactComponent as ArkRankingOff } from 'assets/img/ark-ranking-off.svg';
import { Link } from "react-router-dom";
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={`/modes`}>
                        <ArkPlayOff className="nav-icon" width="170" height="60"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav me-1">
                            <li className="nav-item">
                                <ArkInfoOff className="nav-icon" width="35" height="35" />
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
                                    <ArkMarketOff className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/upgrade`}>
                                    <ArkUpgradeOff className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/checkin`}>
                                    <ArkCheckinOff className="nav-icon" width="35" height="35"/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/exchange`}>
                                    <ArkExchangeOff className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/ranking`}>
                                    <ArkRankingOff className="nav-icon" width="35" height="35" />
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