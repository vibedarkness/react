import '../static/css/Loader.css'; // Importation des styles pour l'animation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
    return (
        <div id="loader">
            <div className="logo-container">
                <h1 style={{fontFamily: "'Pacifico', cursive",}} className="site-name">LES DÉLICES DE MAMISHU</h1>
                {/* Icône de cookie en dessous du texte */}
                <div className="cookie-icon">
                    <FontAwesomeIcon icon={faCookieBite} size="6x" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
