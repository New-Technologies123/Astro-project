import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_1 from '../../../images/services/serves_12.png'
import dot from '../../../images/dot.svg';

import { useTranslation } from 'react-i18next';

export const Repair = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <img src={serves_1.src} alt="сервис" className={Styles.servesImg} onClick={() => {setPhotoIsOpen(true);}}/>
      <div className={Styles.servesText}>
        <h3>{t('Капитальный')}</h3>
        <p>
          <img src={dot.src}/>
          {t('Сепарационной')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Переключателя')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Счетчика')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Задвижек')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Технологического')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Линии')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Гидравлического')}
        </p>
        <p>
          <img src={dot.src}/>
          {t('Электромонтажная')}
        </p>

        <h3>
          {t('Обслуживать')}
        </h3>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Инструкций')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Замеров')}
        </p>
        <h3>
          {t('Модерн')}
        </h3>
        <p>
          {t('Шкафов')}
        </p>
      </div>

      {photoIsOpen && <BigPhoto src={serves_1.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
