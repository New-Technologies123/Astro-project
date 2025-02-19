import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_12 from '../../../images/services/serves_12.png'
import dot from '../../../images/dot.svg';

import { useTranslation } from 'react-i18next';

export const Repair = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <img
        src={serves_12.src}
        alt="сервис"
        className={Styles.servesImg}
        onClick={() => {setPhotoIsOpen(true);}}
      />

      <div className={Styles.servesText}>
        <h3>
          {t('Капитальный')}
        </h3>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Сепарационной')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Переключателя')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Счетчика')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Задвижек')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Технологического')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Линии')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Гидравлического')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
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
      </div>

      {photoIsOpen && <BigPhoto src={serves_12.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
