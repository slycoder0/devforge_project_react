import React from 'react';
import styles from './Portifolio.module.css';
import portfolio1 from '../../assets/imgs/portfolio1.jpg';
import portfolio2 from '../../assets/imgs/portfolio2.jpg';
import portfolio3 from '../../assets/imgs/portfolio3.jpg';
import portfolio4 from '../../assets/imgs/portfolio4.jpg';
import portfolio5 from '../../assets/imgs/portfolio5.jpg';
import portfolio6 from '../../assets/imgs/portfolio6.jpg';

const Portfolio = () => {
    const portfolioItems = [
        { img: portfolio6, title: 'Projeto Web', description: 'Lorem, ipsum dolor sit amet consectetur' },
        { img: portfolio5, title: 'Projeto Web', description: 'Lorem, ipsum dolor sit amet consectetur' },
        { img: portfolio1, title: 'Projeto Web', description: 'Lorem, ipsum dolor sit amet consectetur' },
        { img: portfolio2, title: 'Projeto Web', description: 'Lorem, ipsum dolor sit amet consectetur' },
        { img: portfolio3, title: 'Projeto Web', description: 'Lorem, ipsum dolor sit amet consectetur' },
        { img: portfolio4, title: 'Projeto Web', description: 'Lorem, ipsum dolor sit amet consectetur' }
    ];

    return (
        <section className={styles.portfolio} id="portfolio">
            <div className={styles.mainText}>
                <p>Portifólio</p>
                <h2>Ultimos <span>Projetos</span></h2>
            </div>
            <div className={styles.portfolioContent}>
                {portfolioItems.map((item, index) => (
                    <div className={styles.row} key={index}>
                        <img src={item.img} alt={`portfolio-${index + 1}`} />
                        <div className={styles.layer}>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <a href="#contact"><i className="bx bx-link-external"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;