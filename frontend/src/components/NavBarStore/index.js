import './styles.css';

function NavBarStore() {


    function handleClick() {
        console.log('Click happened');

    };

    return (
        <>
            <div className="NavBarStore justify-content-center">
                <nav>
                    <ul>
                        <li>
                            <a href="#" onClick={handleClick}>
                                <span className="titles">SHIPS</span></a>
                        </li>
                        <li>
                            <a href="#" onClick={handleClick}>
                                <span className="titles">CONSUMABLES</span></a>
                        </li>
                        <li>
                            <a href="#" onClick={handleClick}>
                                <span className="titles">UPGRADE</span></a>
                        </li>
                        <li>
                            <a href="#" onClick={handleClick}>
                                <span className="titles">RESOURCE</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBarStore;