import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_4 from '../../../images/services/serves_4.webp';
import { useTranslation } from 'react-i18next';
import dot from '../../../images/dot.svg';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const Service = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img src={serves_4.src} alt="сервис" className={Styles.serviceImage}/>
          <div className={Styles.imageOverlay}>
            <p>{t('Увеличить')}</p>
          </div>        
        </div>

        <div className={Styles.content}>
          <h3>{t('Техническое')}</h3>
          <ul>
            {['Внешний', 'Проверка', 'Доливка', 'Визуальный', 'Сальников', 
            'Датчика', 'Калибровки', 'Редуктора', 'Заземления', 'Знаков', 'Шкафа', 
            'Обогрева', 'Сбои'].map((item) => (
              <li key={item}>
                <img src={dot.src}/>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BackToTop/>
      {photoIsOpen && <BigPhoto src={serves_4.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
