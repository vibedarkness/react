import Slide from "../components/Slide";
import { Card, Col, Row, Container, Pagination } from 'react-bootstrap';
import '../static/css/Home.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Testimonials from "../components/Testimonials";
import { Link } from 'react-router-dom';
import dishes from '../dishes';

function Home() {
    const itemsPerPage = 12; // Nombre d'éléments par page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(''); // État pour la recherche

    // Calculer le nombre total de pages
    const totalPages = Math.ceil(dishes.length / itemsPerPage);

    // Filtrer les plats en fonction de la recherche
    const filteredDishes = dishes.filter(dish =>
        dish.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Obtenir les plats pour la page actuelle après filtrage
    const currentDishes = filteredDishes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Fonction pour changer de page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [selectedCategory, setSelectedCategory] = useState('Categories');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Réinitialiser à la première page lors d'une nouvelle recherche
    };

    return (
        <>
            <Slide backgroundColor="peachpuff" />

            <Container className="main-content">
                <div className="search-bar p-4">
                    <Form className="d-flex justify-content-center align-items-center">
                        <InputGroup style={{ width: '100%' }}>
                            <Form.Control
                                type="search"
                                placeholder="Rechercher votre cuisine..."
                                aria-label="Rechercher"
                                className="search-input"
                                value={searchQuery} // Lier l'état à la valeur du champ
                                onChange={handleSearchChange} // Appeler la fonction lors du changement
                            />
                            <DropdownButton
                                variant="secondary"
                                title={selectedCategory}
                                id="category-dropdown"
                                onSelect={handleCategorySelect}
                                className="ml-2"
                            >
                                <Dropdown.Item eventKey="Categories">Toutes les catégories</Dropdown.Item>
                                <Dropdown.Item eventKey="Sucré">Sucré</Dropdown.Item>
                                <Dropdown.Item eventKey="Salé">Salé</Dropdown.Item>
                                <Dropdown.Item eventKey="Dessert">Dessert</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </Form>
                </div>

                <div className="dish-cards">
                    <h2 className="text-center mb-4">Découvrez Nos Plats Savoureux</h2>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {currentDishes.map((dish, index) => (
                            <Col key={index}>
                                <Link to={`/details/${dish.id}`} className="card-link">
                                    <Card className="dish-card">
                                        <Card.Img variant="top" src={dish.imageUrl} alt={dish.title} />
                                        <Card.Body>
                                            <Card.Title style={{fontFamily: "'Pacifico', cursive"}} className="dish-title">{dish.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>

                    {/* Pagination */}
                    <Pagination className="justify-content-center mt-4">
                        {Array.from({ length: Math.ceil(filteredDishes.length / itemsPerPage) }, (_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </Container>

            <Testimonials />
        </>
    );
}

export default Home;
