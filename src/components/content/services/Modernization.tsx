import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState } from 'react';
import serves_12 from '../../../images/services/serves_12.png';
import { useTranslation } from 'react-i18next';

export const Modernization = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  return (
    <>
      <img
        src={serves_12.src}
        alt="сервис"
        className={Styles.servesImg}
        onClick={() => {
          setPhotoIsOpen(true);
        }}
      />

      <div className={Styles.servesText}>
        <h3>
          {t('Модерн')}
        </h3>
        <p>
          {t('Шкафов')}
        </p>
      </div>

      {photoIsOpen && <BigPhoto src={serves_12.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
