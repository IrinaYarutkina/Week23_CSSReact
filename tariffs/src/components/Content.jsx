import React, { useState } from 'react';
import {tariffsArrow} from '../Data';
import TariffCard from './TariffCard';
import styles from './Content.module.css'

function GetTariffs(props) {
const [activeIndex, setActiveIndex] = useState(null);
const handleCardClick = (index) => {
    if (activeIndex === index) {
        setActiveIndex(null); 
    } else {
        setActiveIndex(index); 
    }
};

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
                active={index === activeIndex}
                onClick={() => handleCardClick(index)}
                />
        ))}
        </div>
    )
}
export default GetTariffs;