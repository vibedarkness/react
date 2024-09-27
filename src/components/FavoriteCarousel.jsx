import { useEffect, useState } from 'react';
import styles from '../static/css/FavoriteCaroussel.module.css'; // Import CSS as module
import img1 from '../static/img/1.jpeg';
import img2 from '../static/img/2.jpeg';
import img3 from '../static/img/3.jpeg';
import img4 from '../static/img/4.jpeg';
import img5 from '../static/img/5.jpeg';
import img6 from '../static/img/6.jpeg';
import img7 from '../static/img/7.jpeg';
import img8 from '../static/img/8.jpeg';

const favoriteDishes = [
    { id: 1, title: "Poulet Yassa", imageUrl: img1 },
    { id: 2, title: "Thieboudienne", imageUrl: img2 },
    { id: 3, title: "Mafé", imageUrl: img3 },
    { id: 4, title: "Mafé", imageUrl: img4 },
    { id: 5, title: "Mafé", imageUrl: img5 },
    { id: 6, title: "Mafé", imageUrl: img6 },
    { id: 7, title: "Mafé", imageUrl: img7 },
    { id: 8, title: "Mafé", imageUrl: img8 },
];

const FavoriteCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % (favoriteDishes.length - 4); 
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const displayedDishes = favoriteDishes.slice(0, 4).concat(favoriteDishes.slice(4 + currentIndex, 5 + currentIndex));

    return (
        <div className={styles.favoriteDishesCarousel}>
            <div className={styles.carouselContent}>
                {displayedDishes.map((dish, index) => (
                    <div
                        key={dish.id}
                        className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
                    >
                        <img
                            className={styles.dishImage}
                            src={dish.imageUrl}
                            alt={dish.title}
                        />
                        <h3>{dish.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteCarousel;
