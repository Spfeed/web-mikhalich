import styles from '../css/CurrencyRate.module.css';
import CurrencyRateController from '../controllers/currencyRateController';

function CurrencyRate({
    from,
    to,
    setUrl,
    setOpen,
}:{
    from: string;
    to: string;
    setUrl: (url: string) => void;
    setOpen: (value: boolean) => void;
}) {
    const doubleClick = () => {
        CurrencyRateController.getGif(from, to)
        .then((value) => {
            setUrl(value.data.url);
            setOpen(true);
        })
        .catch(() => {
            alert('Увы, у вас нет премиума, чтобы получать другие курсы( с OpenExchange.');
        });
    };
    return(
        <div className={styles.container} onDoubleClick={doubleClick}>
            <div className={styles.td}>{from}</div>
            <div className={styles.td}>{to}</div>
        </div>
    );
}

export default CurrencyRate;