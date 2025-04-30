import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_3 from '../../../images/services/serves_3.png';
import { useTranslation } from 'react-i18next';
import dot from '../../../images/dot.svg';

export const Metering = () => {
  const { t } = useTranslation('services');
  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img 
            src={serves_3.src} 
            alt="сервис" 
            className={Styles.serviceImage}
          />
          <div className={Styles.imageOverlay}>
            <span className={Styles.zoomText}>{t('Увеличить')}</span>
          </div>
        </div>

        <div className={Styles.content}>
          <h3 className={Styles.title}>{t('Установки')}</h3>
          <ul className={Styles.featureList}>
            {['Доставку', 'Монтаж', 'Сброс', 'Форматироваие', 'Опрессовку'].map((item) => (
              <li key={item} className={Styles.featureItem}>
                <img src={dot.src} className={Styles.dotIcon} />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {photoIsOpen && <BigPhoto src={serves_3.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};