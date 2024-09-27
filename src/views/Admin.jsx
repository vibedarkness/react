import { useState } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

const Admin = () => {
    // État pour gérer l'ouverture et la fermeture du modal
    const [showModal, setShowModal] = useState(false);

    // État pour gérer les plats existants
    const [dishes, setDishes] = useState([
        { id: 1, name: 'Pizza Margherita', price: 8.5 },
        { id: 2, name: 'Lasagne', price: 12 },
        { id: 3, name: 'Spaghetti Bolognese', price: 10 },
    ]);

    // État pour gérer les valeurs du nouveau plat
    const [newDish, setNewDish] = useState({ name: '', price: '' });

    // État pour gérer la recherche
    const [search, setSearch] = useState('');

    // Fonction pour gérer l'ouverture du modal
    const handleOpenModal = () => setShowModal(true);

    // Fonction pour gérer la fermeture du modal
    const handleCloseModal = () => setShowModal(false);

    // Fonction pour gérer les changements de saisie du formulaire
    const handleChange = (e) => {
        setNewDish({
            ...newDish,
            [e.target.name]: e.target.value,
        });
    };

    // Fonction pour ajouter un nouveau plat
    const handleAddDish = () => {
        if (newDish.name && newDish.price) {
            setDishes([...dishes, { id: dishes.length + 1, ...newDish }]);
            setNewDish({ name: '', price: '' }); // Réinitialiser les champs du formulaire
            handleCloseModal(); // Fermer le modal après l'ajout
        }
    };

    // Fonction pour filtrer les plats en fonction de la recherche
    const filteredDishes = dishes.filter((dish) =>
        dish.name.toLowerCase().includes(search.toLowerCase())
    );

    // Colonnes du DataTable
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Nom du plat',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Prix (€)',
            selector: row => row.price,
            sortable: true,
        },
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center">Liste des plats proposer</h2>

            {/* DataTable pour afficher les plats */}
            <DataTable
                columns={columns}
                data={filteredDishes}
                pagination
                highlightOnHover
                fixedHeader
                fixedHeaderScrollHeight="300px"
                persistTableHead
                subHeader
                subHeaderComponent={
                    <div className="d-flex justify-content-between w-100">
                        <Button variant="primary" onClick={handleOpenModal}>
                            Ajouter un plat
                        </Button>
                        <Form.Control
                            type="text"
                            placeholder="Rechercher un plat"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-50"
                        />
                    </div>
                }
            />

            {/* Modal pour ajouter un nouveau plat */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un nouveau plat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formDishName">
                            <Form.Label>Nom du plat</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newDish.name}
                                onChange={handleChange}
                                placeholder="Entrer le nom du plat"
                            />
                        </Form.Group>

                        <Form.Group controlId="formDishPrice" className="mt-3">
                            <Form.Label>Prix (€)</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={newDish.price}
                                onChange={handleChange}
                                placeholder="Entrer le prix du plat"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={handleAddDish}>
                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Admin;
