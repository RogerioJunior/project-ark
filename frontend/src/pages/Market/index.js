import nft01 from 'assets/img/nft01.png';
import nft02 from 'assets/img/nft02.png';
import nft03 from 'assets/img/nft03.png';
import nft04 from 'assets/img/nft04.png';
import nft05 from 'assets/img/nft05.png';
import nft06 from 'assets/img/nft06.png';
import nft07 from 'assets/img/nft07.png';
import nft08 from 'assets/img/nft08.png';

import './styles.css';

function Market() {
    return (
        <>
            <div className="market">

                <div className="container-market">
                    <div className="border-container">
                    </div>
                </div>

                <div className="container-grid">
                    <div className="grid grid-template-columns-4">
                        <div className="card-nft">
                            <img src={nft01} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft02} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft03} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft04} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft05} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft06} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft07} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                        <div className="card-nft">
                            <img src={nft08} alt="NFT" />
                            <button disable type="button">BUY</button>
                            <p>PRICE: 4512</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Market;