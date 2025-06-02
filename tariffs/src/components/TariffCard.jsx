import styles from './Content.module.css';

function TariffCard({ name, price, speed, info, color, textColor, active }) {
    const cardClass = `${styles.tariffCard} ${active ? styles.activeCard : ''}`;

    return (
        <div
        className={cardClass}
        style={{
        backgroundColor: color,
        color: textColor || 'black'
        }}>
            <h2 className={styles.tariffTitle} >{name}</h2>
            <h3 className={styles.tariffPrice} >{price}</h3>
            <p>{speed}</p>
            <p>{info}</p>
        </div>
    );
}

export default TariffCard;