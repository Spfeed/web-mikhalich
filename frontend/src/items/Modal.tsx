import styles from '../css/Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    setOpen: (flag: boolean) => void;
    url: string;
    setUrl: (url: string) => void;
}

function Modal(props: ModalProps){
    const {isOpen, setOpen, url, setUrl} = props;
    return (
        <div
        className={`${styles.window} ${isOpen ? styles.modalOpen : ''}`}
        onMouseDown={() => {
            setOpen(false);
            setUrl('');
        }}
        >
            <div className={`${styles.modal_content} ${isOpen ? styles.modal_contentOpen: ''}`}
            onMouseDown={(e) => e.stopPropagation()}
            >

                <img src={url} alt="" />

            </div>
        </div>
    )
}

export default Modal;