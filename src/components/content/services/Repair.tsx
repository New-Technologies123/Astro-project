import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_1 from '../../../images/services/serves_12.png'

import { useTranslation } from 'react-i18next';

export const Repair = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img src={serves_1.src} alt="сервис" className={Styles.serviceImage}/>
          <div className={Styles.imageOverlay}>
            <span className={Styles.zoomText}>{t('Увеличить')}</span>
          </div>
        </div>

        <div className={Styles.content}>
          <h3 className={Styles.title}>{t('Капитальный')}</h3>
          <ul className={Styles.featureList}>
            {['Сепарационной', 'Переключателя', 'Счетчика', 'Задвижек', 'Технологического', 'Линии', 
            'Гидравлического', 'Электромонтажная'].map((item) => (
              <li key={item} className={Styles.featureItem}>
                {t(item)}
              </li>
            ))}
          </ul>
          <h3 className={Styles.title}>{t('Обслуживать')}</h3>
          <ul className={Styles.featureList}>
            {['Инструкций', 'Замеров'].map((item) => (
              <li key={item} className={Styles.featureItem}>
                {t(item)}
              </li>
            ))}
          </ul>
          <h3 className={Styles.title}>{t('Модерн')}</h3>
          <ul className={Styles.featureList}>
            {['Шкафов'].map((item) => (
              <li key={item} className={Styles.featureItem}>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {photoIsOpen && <BigPhoto src={serves_1.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
