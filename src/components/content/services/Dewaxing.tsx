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
      <img src={serves_5.src} alt="сервис" className={Styles.servesImg} onClick={() => { setPhotoIsOpen(true); }}/>

      <div className={Styles.servesText}>
        <p>{t('Услуги')}</p>
        <p>{t('АСПО')}</p>
        <p>{t('УЭЦН')}</p>
        <p>{t('Глубина')}</p>
        <p>{t('Отложения')}</p>
        <p>{t('Персонал')}</p>
      </div>

      {photoIsOpen && <BigPhoto src={serves_5.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
