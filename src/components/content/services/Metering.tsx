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
      <img
        src={serves_3.src}
        alt="сервис"
        className={Styles.servesImg}
        onClick={() => {
          setPhotoIsOpen(true);
        }}
      />

      <div className={Styles.servesText}>
        <h3>{t('Установки')}</h3>
        <p>
          <img src={dot.src} className={Styles.dotIcon} />
          {t('Доставку')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon} />
          {t('Монтаж')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon} />
          {t('Сброс')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon} />
          {t('Форматироваие')}
        </p>
        <p>
          <img src={dot.src} className={Styles.dotIcon} />
          {t('Опрессовку')}
        </p>
      </div>

      {photoIsOpen && <BigPhoto src={serves_3.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
