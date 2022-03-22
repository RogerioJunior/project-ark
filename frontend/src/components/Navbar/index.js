import arkbar from 'assets/img/ark-bar.png';
import arkicon1 from 'assets/img/ark-icon-1.png';
import arkicon2 from 'assets/img/ark-icon-2.png';
import arkicon3 from 'assets/img/ark-icon-3.png';
import arkicon4 from 'assets/img/ark-icon-4.png';
import { ReactComponent as ArkPlay } from 'assets/img/ark-play.svg';
import { ReactComponent as ArkInfo } from 'assets/img/ark-info.svg';
import { ReactComponent as ArkMarket } from 'assets/img/ark-market.svg';
import { ReactComponent as ArkUpgrade } from 'assets/img/ark-upgrade.svg';
import { ReactComponent as ArkCheckin } from 'assets/img/ark-checkin.svg';
import { ReactComponent as ArkExchange } from 'assets/img/ark-exchange.svg';
import { ReactComponent as ArkRanking } from 'assets/img/ark-ranking.svg';
import { Link } from "react-router-dom";
import './styles.css';

function Navbar() {

    function hideMenu() {
        document.getElementById("navbarNav").className =
            document.getElementById("navbarNav").className.replace
                (/(?:^|\s)show(?!\S)/g, '')
        document.getElementById("menu-collapse").className += " collapsed";
        document.getElementById('menu-collapse').setAttribute('aria-expanded', 'false');
        
        
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link onClick={hideMenu} to={`/modes`}>
                        <ArkPlay className="nav-icon" width="170" height="60" />
                    </Link>
                    <button id="menu-collapse" className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav me-1">
                            <li className="nav-item">
                                <ArkInfo className="nav-icon" width="35" height="35" />
                            </li>
                        </ul>

                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/hangar`}>
                                    <span className="navbar-text">HANGAR</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/refinary`}>
                                    <span className="navbar-text">REFINARY</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/store`}>
                                    <span className="navbar-text">STORE</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/market`} title="Marketplace">
                                    <ArkMarket className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/upgrade`} title="Upgrade">
                                    <ArkUpgrade className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/checkin`} title="Checkin">
                                    <ArkCheckin className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/exchange`} title="Reflection">
                                    <ArkExchange className="nav-icon" width="35" height="35" />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={hideMenu} to={`/ranking`} title="Ranking">
                                    <ArkRanking className="nav-icon" width="35" height="35" />
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