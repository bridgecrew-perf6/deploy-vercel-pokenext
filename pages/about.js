import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus itaque cupiditate, iure quam nostrum suscipit reprehenderit. Vel architecto non eveniet ad maiores accusamus quis animi. Quibusdam minima fugiat quia debitis.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
        </div>
    );
};