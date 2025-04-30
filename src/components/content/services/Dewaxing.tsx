import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_5 from '../../../images/services/serves_5.webp';
import { useTranslation } from 'react-i18next';


export const Dewaxing = () => {
  const { t } = useTranslation('services');
  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img 
            src={serves_5.src} 
            alt="сервис" 
            className={Styles.serviceImage}
          />
          <div className={Styles.imageOverlay}>
            <span className={Styles.zoomText}>{t('Увеличить')}</span>
          </div>
        </div>

        <div className={Styles.content}>
          <ul className={Styles.featureList}>
            {['Услуги', 'АСПО', 'УЭЦН', 'Глубина', 'Отложения', 'Персонал'].map((item) => (
              <li key={item} className={Styles.featureItem}>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {photoIsOpen && <BigPhoto src={serves_5.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
