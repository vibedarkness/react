import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Importation de useParams pour récupérer les paramètres de l'URL
import '../static/css/Details.css';
import { Card, Form, Button, Col, Row } from 'react-bootstrap'; // Utilise Bootstrap pour le design
import dishes from '../dishes';

function DishDetailPage() {
    // Récupérer l'ID du plat depuis l'URL
    const { id } = useParams();

    // Rechercher le plat correspondant dans le tableau dishes
    const dish = dishes.find((d) => d.id === parseInt(id));

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    if (!dish) {
        return <p className="error-text">Plat non trouvé</p>; // Gestion du cas où l'ID ne correspond à aucun plat
    }

    const handleCommentSubmit = () => {
        setComments([...comments, newComment]);
        setNewComment("");
    };

    return (
        <div className="dishd-detail-page">
            <Card className="dishd-card-detail">
                <Card.Img variant="top" src={dish.imageUrl} alt={dish.title} className="dishd-image" />
                <Card.Body>
                    <Card.Title className="dishd-title">{dish.title}</Card.Title>
                    <p className="dishd-cooking-time"><strong>Temps de cuisson:</strong> {dish.cookingTime}</p>
                    <Row className="dishd-content">
                        <Col md={6} className="dishd-ingredients-section">
                            <h4 className="dishd-subtitle">Ingrédients</h4>
                            <ul className="dishd-ingredients">
                                {dish.ingredients.map((ingredient, index) => (
                                    <li key={index} className="ingredient-item">
                                        <i className="fas fa-carrot ingredient-icon"></i>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={6} className="dishd-steps-section">
                            <h4 className="dishd-subtitle">Étapes de préparation</h4>
                            <ol className="dishd-steps">
                                {dish.steps.map((step, index) => (
                                    <li key={index} className="step-item">
                                        <i className="fas fa-utensils step-icon"></i>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <div className="comment-section">
                <h4>Commentaires</h4>
                <ul className="comment-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item">{comment}</li>
                    ))}
                </ul>
                <Form className="comment-form">
                    <Form.Group controlId="commentForm.ControlTextarea">
                        <Form.Label>Ajouter un commentaire</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={newComment} 
                            onChange={(e) => setNewComment(e.target.value)} 
                        />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        className="mt-3" 
                        onClick={handleCommentSubmit}>
                        Soumettre
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default DishDetailPage;
