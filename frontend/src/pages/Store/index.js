import NavBarStore from "components/NavBarStore";
import './styles.css';

function Store() {
    return (
        <>
            <div className="store">
                <div className="container-store">
                    <NavBarStore />
                </div>
            </div>
        </>
    )
}

export default Store;