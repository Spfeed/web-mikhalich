import { Component, useState } from "react";
import styles from '../css/CurrencyTable.module.css';
import CurrencyRate from "./CurrencyRate";
import Modal from "./Modal";

export function CurrencyTable(){
    const [isOpen, setOpen] = useState(false);
    const [url, setUrl] = useState('');
    const currencies=[
        {id: 1, from: 'USD', to: 'EUR', setUrl, setOpen},
        {id: 2, from: 'USD', to: 'RUB', setUrl, setOpen},//Базовой везде является доллар, т.к OpenexchangeRates без премиума не дает поставить другую
        {id: 3, from: 'USD', to: 'AUD', setUrl, setOpen},
        {id: 4, from: 'USD', to: 'GBP', setUrl, setOpen},
    ];
    return(
        <div className={styles.container}>
            {currencies.map(
                (currency: {id: number; from: string; to: string; setUrl: (url: string) => void}) => {
                    return (
                        <CurrencyRate
							key={currency.id}
							from={currency.from}
							to={currency.to}
							setUrl={currency.setUrl}
							setOpen={setOpen}
						/>
                    );
                },
            )}
            <Modal url={url} isOpen={isOpen} setOpen={setOpen} setUrl={setUrl} />
        </div>
    );
}

export default CurrencyTable;