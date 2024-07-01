import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Servicos.module.css';
import img1 from '../../assets/imgs/img-1.svg';
import img2 from '../../assets/imgs/img-2.svg';
import img3 from '../../assets/imgs/img-3.svg';
import img4 from '../../assets/imgs/img-4.svg';
import img5 from '../../assets/imgs/img-5.svg';
import img6 from '../../assets/imgs/img-6.svg';

const Servicos = () => {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '20px',
            duration: 1000,
            reset: false // isso faz com que a animação se repita ao rolar a página
        });

        sr.reveal(`.${styles.titulo1}`, { delay: 950 });
        sr.reveal(`.${styles.titulo2}`, { delay: 1200 });
        sr.reveal(`.${styles.titulo3}`, { delay: 1450 });
        sr.reveal(`.${styles.titulo4}`, { delay: 1700 });
        sr.reveal(`.${styles.titulo5}`, { delay: 1950 });
        sr.reveal(`.${styles.titulo6}`, { delay: 2200 });
    }, []);

    return (
        <div className={styles.servicos} id='servicos'>
            <h1 className={styles.title_servicos}>Serviços</h1>
            <div className={styles.container_servicos}>
                <div className={styles.titulo1}>
                    <div className={styles.foto}><img src={img1} alt="Foto1" /></div>
                    <div className={styles.titulo}>
                        <h1>Criação de Sites</h1>
                    </div>
                    <div className={styles.descricao}>
                        <p>Fazemos a criação de sites profissionais para a sua empresa.</p>
                    </div>
                </div>
                <div className={styles.titulo2}>
                    <div className={styles.foto}><img src={img2} alt="Foto2" /></div>
                    <div className={styles.titulo}>
                        <h1>Criação de Sites</h1>
                    </div>
                    <div className={styles.descricao}>
                        <p>Fazemos a criação de sites profissionais para a sua empresa.</p>
                    </div>
                </div>
                <div className={styles.titulo3}>
                    <div className={styles.foto}><img src={img3} alt="Foto3" /></div>
                    <div className={styles.titulo}>
                        <h1>Criação de Sites</h1>
                    </div>
                    <div className={styles.descricao}>
                        <p>Fazemos a criação de sites profissionais para a sua empresa.</p>
                    </div>
                </div>
                <div className={styles.titulo4}>
                    <div className={styles.foto}><img src={img4} alt="Foto4" /></div>
                    <div className={styles.titulo}>
                        <h1>Criação de Sites</h1>
                    </div>
                    <div className={styles.descricao}>
                        <p>Fazemos a criação de sites profissionais para a sua empresa.</p>
                    </div>
                </div>
                <div className={styles.titulo5}>
                    <div className={styles.foto}><img src={img5} alt="Foto5" /></div>
                    <div className={styles.titulo}>
                        <h1>Criação de Sites</h1>
                    </div>
                    <div className={styles.descricao}>
                        <p>Fazemos a criação de sites profissionais para a sua empresa.</p>
                    </div>
                </div>
                <div className={styles.titulo6}>
                    <div className={styles.foto}><img src={img6} alt="Foto6" /></div>
                    <div className={styles.titulo}>
                        <h1>Criação de Sites</h1>
                    </div>
                    <div className={styles.descricao}>
                        <p>Fazemos a criação de sites profissionais para a sua empresa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Servicos;
