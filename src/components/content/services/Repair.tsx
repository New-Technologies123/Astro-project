import Styles from './services.module.scss';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useState, useEffect } from 'react';
import serves_1 from '../../../images/services/serves_12.png'
import up from '../../../images/arrow.svg';

import { useTranslation } from 'react-i18next';

export const Repair = () => {
  const { t } = useTranslation('services');

  const [photoIsOpen, setPhotoIsOpen] = useState(false);

  // Кнопка "Наверх"
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 100) setIsVisible(true);
        else setIsVisible(false);
      };
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.imageWrapper} onClick={() => setPhotoIsOpen(true)}>
          <img src={serves_1.src} alt="сервис" className={Styles.serviceImage}/>
          <div className={Styles.imageOverlay}>
            <p>{t('Увеличить')}</p>
          </div>
        </div>

        <div className={Styles.content}>
          <h3>{t('Капитальный')}</h3>
          <ul>
            {['Сепарационной', 'Переключателя', 'Счетчика', 'Задвижек', 'Технологического', 'Линии', 
            'Гидравлического', 'Электромонтажная'].map((item) => (
              <li key={item}>
                {t(item)}
              </li>
            ))}
          </ul>
          <h3 className={Styles.title}>{t('Обслуживать')}</h3>
          <ul>
            {['Инструкций', 'Замеров'].map((item) => (
              <li key={item}>
                {t(item)}
              </li>
            ))}
          </ul>
          <h3>{t('Модерн')}</h3>
          <ul>
            {['Шкафов'].map((item) => (
              <li key={item}>
                {t(item)}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <button 
          onClick={scrollToTop} 
          className={`${Styles.backToTop} ${isVisible ? Styles.visible : ''}`}
          aria-label="Наверх">
          <img src={up.src} alt="" className={Styles.upIcon} />
        </button>
      {photoIsOpen && <BigPhoto src={serves_1.src} onClose={() => setPhotoIsOpen(false)} />}
    </>
  );
};
