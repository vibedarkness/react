import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './views/Home'; // Assurez-vous d'importer vos composants
import Login from './views/LoginPage'; 
import Admin from './views/Admin';
import Details from './views/DishDetailPage';
// Le composant de votre page de connexion
// import Categories from './Categories'; // Exemple de page de catégories
// import Profile from './Profile'; // Exemple de page de profil
// import NotFound from './NotFound'; // Page 404 pour les routes non trouvées

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin" element={<Admin />} />   
        <Route path="/details/:id" element={<Details />} />
        {/* <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />  Pour les routes non définies */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
