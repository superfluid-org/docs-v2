import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Card({ title, description, link, icon: Icon }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardContent}>
        {Icon && <Icon className={styles.cardIcon} />}
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
}