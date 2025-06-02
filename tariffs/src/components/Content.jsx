import {tariffsArrow} from '../Data';
import TariffCard from './TariffCard';
import styles from './Content.module.css'

function GetTariffs(props) {
    return(
        <div className={styles.cardContainer}>
            {tariffsArrow.map((tariff, index) => (
                <TariffCard
                key={index}
                name={tariff.name}
                price={tariff.price}
                speed={tariff.speed}
                info={tariff.info}
                color={tariff.color}
                textColor={tariff.textColor}
                active={tariff.active}
                />
        ))}
        </div>
    )
}
export default GetTariffs;