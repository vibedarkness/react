import { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../static/css/LoginPage.css'; // Fichier CSS pour styliser la page

const LoginPage = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const correctPassword = '02051999'; 
    const maxAttempts = 5; 
    const disabledDuration = 48 * 60 * 60 * 1000; 

    useEffect(() => {
        const savedAttempts = localStorage.getItem('attempts');
        if (savedAttempts) {
            setAttempts(parseInt(savedAttempts, 10));
        }

        const lastDisabledTime = localStorage.getItem('disabledUntil');
        if (lastDisabledTime && new Date().getTime() < lastDisabledTime) {
            setIsDisabled(true);
        } else {
            localStorage.removeItem('disabledUntil');
        }
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isDisabled) {
            setErrorMessage("Vous avez atteint le nombre maximum de tentatives. Réessayez plus tard.");
            return;
        }

        if (inputValue === correctPassword) {
            // Réinitialiser le nombre de tentatives
            setAttempts(0);
            localStorage.setItem('attempts', 0); // Réinitialiser dans localStorage
            navigate('/admin');
        } else {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            localStorage.setItem('attempts', newAttempts); // Mettre à jour les tentatives

            const remainingAttempts = maxAttempts - newAttempts;

            if (remainingAttempts > 0) {
                setErrorMessage(`Valeur incorrecte, il vous reste ${remainingAttempts} tentatives.`);
            } else {
                setIsDisabled(true);
                localStorage.setItem('disabledUntil', new Date().getTime() + disabledDuration);
                setErrorMessage('Trop de tentatives, essayez à nouveau dans 48 heures.');
            }
        }

        setInputValue(''); // Réinitialiser le champ de saisie
    };

    return (
        <Container className="login-container d-flex align-items-center justify-content-center">
            <div className="login-box">
                <h2 className="text-center mb-4">Connexion</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Code de Confidentialité</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            disabled={isDisabled} 
                            placeholder="Entrer le mot de passe" 
                            className="input-field"
                        />
                    </Form.Group>
                    {errorMessage && <Alert variant="danger" className="mt-3">{errorMessage}</Alert>}
                    <Button 
                    style={{ backgroundColor: '#ff6f61', borderColor: '#ff6f61', color: 'white' }}
                        variant="custom-primary" 
                        type="submit" 
                        disabled={isDisabled} 
                        className="mt-3 w-100"
                    >
                        Se connecter
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default LoginPage;
