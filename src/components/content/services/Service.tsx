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
      <img
        src={serves_5.src}
        alt="сервис"
        className={Styles.servesImg}
        onClick={() => {
          setPhotoIsOpen(true);
        }}
      />

      <div className={Styles.servesText}>
        <h3>
          {t('Техническое')}
        </h3>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Внешний')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Проверка')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Доливка')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Визуальный')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Сальников')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Датчика')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Калибровки')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Редуктора')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Заземления')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Знаков')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Шкафа')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Обогрева')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon}/>
          {t('Сбои')}
        </p>
      </div>

      {photoIsOpen && <BigPhoto src={serves_5.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
