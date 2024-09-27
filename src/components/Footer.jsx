import '../static/css/Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';








function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h5>À propos de nous</h5>
                        <p>
                            Nous proposons des plats délicieux et savoureux faits avec amour. 
                            Découvrez nos spécialités qui raviront vos papilles.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Suivez-nous</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="mx-2">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="mx-2">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="mx-2">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>
                            Email : info@delicesmamishu.com <br />
                            Téléphone : +221 77 757 40 42
                        </p>
                    </div>
                </div>
                <div className="footer-bottom pt-3">
    <p>&copy; {new Date().getFullYear()} Les Délices de Mamishu. Tous droits réservés.</p>
    <p>
        Développé par <a href="https://vibedarkness.github.io/" target="_blank" rel="noopener noreferrer">Devdingo</a>.
    </p>
</div>
            </div>
        </footer>
    );
}

export default Footer;
