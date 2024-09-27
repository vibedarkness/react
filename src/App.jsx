import 'bootstrap/dist/css/bootstrap.min.css';
import MonNavbar from "./components/Navbar";
import AppRoutes from './Routes';

import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simuler un chargement de 3 secondes avant d'afficher le contenu
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Nettoyage de l'effet si le composant est démonté avant la fin du timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? ( // Afficher le Loader si le chargement est en cours
                <Loader />
            ) : (
                <> 
                    <MonNavbar backgroundColor="peachpuff" />
                    <AppRoutes />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
