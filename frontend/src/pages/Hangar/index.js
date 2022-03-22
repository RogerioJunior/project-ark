import ArkWithdraw from 'assets/img/Withdraw.svg';
import ArkDeposit from 'assets/img/Deposit.svg';

import './styles.css';

function Hangar() {
    return (
        <>
            <div className="hangar">
                <div className="container-hangar">
                <div className="btn">
                    <button className="withdraw"><img src={ArkWithdraw} alt="withdraw" /></button>
                    <button className="deposit"><img src={ArkDeposit} alt="deposit" /></button>
                </div>
                </div>
            </div>
        </>
    )
}

export default Hangar;