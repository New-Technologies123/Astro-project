import Styles from './big-photo.module.scss';
// import { Gallery } from '../gallery/Gallery'; 

export const BigPhoto = ({ src, onClose }) => {
  return (
    <div className={Styles.modal} onClick={onClose}>
      <button className={Styles.close} onClick={(e) => { e.stopPropagation(); onClose(); }}>
        &times;
      </button>
      <img src={src} alt="" className={Styles.modalContent} />
    </div>
  );
};
