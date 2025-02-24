import { useState, useEffect } from 'react';
import product_1 from '../../../images/products/product_1.webp';
import product_1_1 from '../../../images/products/product_1_1.webp';
import product_1_2 from '../../../images/products/product_1_2.webp';
import up from '../../../images/arrow.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import Styles from './products.module.scss';
import { useTranslation } from 'react-i18next';

export const AccountingSystem = () => {
  const { t } = useTranslation('products');

  const [firstIsOpen, setFirstIsOpen] = useState(false);
  const [secondIsOpen, setSecondIsOpen] = useState(false);
  const [thirdIsOpen, setThirdIsOpen] = useState(false);  

  const handleClick = useClickToScroll();

  // Функция для прокрутки вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Плавная прокрутка
    });
  };

  const [isVisible, setIsVisible] = useState(false); // Состояние видимости кнопки

  // Функция для отслеживания прокрутки
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) { // Показывать кнопку после прокрутки
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Добавляем слушатель прокрутки при монтировании компонента
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={Styles.wrapper}>
      
      <div className={Styles.verticalMenu}>
        <a onClick={() => { handleClick('products-1'); }}>{t('Стационарная')}</a>
        <a onClick={() => { handleClick('products-2'); }}>{t('Мобильная')}</a>
      </div>

      <div className={Styles.productsInfo}>
        <div className={Styles.productsText}>
          <h3 id="products-1">{t('Стационарная')}</h3>

          <div className={Styles.blocImg}>
            <img src={product_1.src} alt="АГЗУ-С" onClick={() => { setFirstIsOpen(true); }} />
            <img src={product_1_1.src} alt="АГЗУ-С" onClick={() => { setSecondIsOpen(true); }} />
          </div>

          <h1>{t('Преимущество')}</h1>
          <p>{t('Высокая')}</p>
          <p>{t('Гибкая')}</p>
        </div>
        <div className={Styles.productsText}>
          <h3 id="products-2">{t('Мобильная')}</h3>
          <img src={product_1_2.src} alt="АГЗУ-С" className={Styles.mainImg} onClick={() => { setThirdIsOpen(true); }} />
          <p>{t('Изготовлении')}</p>
          <p>{t('Действия')}</p>
        </div>
      </div>

      {/* Кнопка "Наверх" с условием видимости */}
      <div className={`${Styles.backUp} ${isVisible ? Styles.visible : ''}`}>
        <a onClick={scrollToTop}>
          <img src={up.src} alt="Наверх" />
        </a>
      </div>

      {firstIsOpen && <BigPhoto src={product_1.src} onClose={() => setFirstIsOpen(false)} />}
      {secondIsOpen && <BigPhoto src={product_1_1.src} onClose={() => setSecondIsOpen(false)} />}
      {thirdIsOpen && <BigPhoto src={product_1_2.src} onClose={() => setThirdIsOpen(false)} />}
    </div>
  );
};