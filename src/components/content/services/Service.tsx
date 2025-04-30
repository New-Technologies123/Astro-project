import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_5 from '../../../images/services/serves_5.webp';
import { useTranslation } from 'react-i18next';
import dot from '../../../images/dot.svg';

export const Service = () => {
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
          <h3 className={Styles.title}>{t('Техническое')}</h3>
          <ul className={Styles.featureList}>
            {['Внешний', 'Проверка', 'Доливка', 'Визуальный', 'Сальников', 
            'Датчика', 'Калибровки', 'Редуктора', 'Заземления', 'Знаков', 'Шкафа', 
            'Обогрева', 'Сбои'].map((item) => (
              <li key={item} className={Styles.featureItem}>
                <img src={dot.src} className={Styles.dotIcon} />
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
