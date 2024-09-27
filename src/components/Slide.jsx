import { Carousel } from 'react-bootstrap';
import '../static/css/Home.css'; // Chemin pour le CSS si dans src
import reineImage from '../static/img/maman1.jpg'; // Import direct de l'image
import exampleVideo1 from '../static/video/v1.mp4'; // Import de la première vidéo
import exampleVideo2 from '../static/video/v2.mp4'; // Import de la deuxième vidéo

function Slide() {
    return (
        <div className="carousel-banner">
            <Carousel controls={false} indicators={true} interval={3000}> {/* Ajout de controls={false} */}
                {/* Slide 1 - Vidéo */}
                <Carousel.Item>
                    <video className="d-block w-100" autoPlay loop muted playsInline>
                        <source src={exampleVideo2} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <Carousel.Caption>
                        <h3>Nous comprenons les défis auxquels nos clients sont confrontés</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 2 - Image */}
                <Carousel.Item>
                    <img className="d-block w-100" src={reineImage} alt="First slide" />
                    <Carousel.Caption>
                        <h3>BIENVENUE SUR LES DELICES DE MAMISHU</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Slide 3 - Vidéo */}
                <Carousel.Item>
                    <video className="d-block w-100" autoPlay loop muted playsInline>
                        <source src={exampleVideo1} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                    <Carousel.Caption>
                        <h3>Découvrez les nouveautés en vidéo</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slide;
