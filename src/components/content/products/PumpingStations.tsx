import Styles from './products.module.scss';
import { useState, useEffect, useRef } from 'react';
import product_5 from '../../../images/products/product_5.webp';
import product_5_1 from '../../../images/products/product_5_1.webp';
import up from '../../../images/arrow.svg';
import dot from '../../../images/dot.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';


export const PumpingStations = () => {
  const { t } = useTranslation('products');

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);

  const sectionsRef = useRef([]);
  const handleClick = useClickToScroll();

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
    <div className={Styles.container}>
      <div className={Styles.mainContent}>
        <aside className={Styles.sidebar}>
          <nav className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span>{t('Насосная')}</span>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span>{t('Мультифазная')}</span>
            </button>
          </nav>
        </aside>

        <div className={Styles.content}>
          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Блочная насосная станция внутренней</span> и внешней перекачки нефти</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_5.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Трубопроводы')}</p>
                    <p className={Styles.featureText}>{t('Производства')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Типовой')}</h4>
                    <p className={Styles.featureText}>{t('Насосные')}</p>
                    <p className={Styles.featureText}>{t('Приемный')}</p>
                    <p className={Styles.featureText}>{t('Дренажа')}</p>
                    <p className={Styles.featureText}>{t('Пожароохранной')}</p>
                    <p className={Styles.featureText}>{t('Пенного')}</p>
                    <p className={Styles.featureText}>{t('Автоматизации')}</p>

                    <p className={Styles.featureText}>{t('Грузоподъемные')}</p>
                    <p className={Styles.featureText}>{t('Управления')}</p>
                    <p className={Styles.featureText}>{t('Передачи')}</p>
                    <p className={Styles.featureText}>{t('Электроснабжения')}</p>
                    <p className={Styles.featureText}>{t('Жизнеобеспечения')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Блочная мультифазная</span> насосная станция</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_5_1.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Назначение')}</h4>
                    <p className={Styles.featureText}>{t('Перекачивания')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Типовой')}</h4>
                    <p className={Styles.featureText}>{t('Мультифазные')}</p>
                    <p className={Styles.featureText}>{t('Трубо')}</p>
                    <p className={Styles.featureText}>{t('Дренажные')}</p>
                    <p className={Styles.featureText}>{t('Комплект')}</p>
                    <p className={Styles.featureText}>{t('Отопление')}</p>

                    <p className={Styles.featureText}>{t('Агрегатами')}</p>
                    <p className={Styles.featureText}>{t('Противоаварийной')}</p>
                    <p className={Styles.featureText}>{t('Частотных')}</p>
                    <p className={Styles.featureText}>{t('Информации')}</p>
                    <p className={Styles.featureText}>{t('Электро')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <button 
        onClick={scrollToTop} 
        className={`${Styles.backToTop} ${isVisible ? Styles.visible : ''}`}
        aria-label="Наверх">
        <img src={up.src} alt="" className={Styles.upIcon} />
      </button>

      {oneIsOpen && <BigPhoto src={product_5.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_5_1.src} onClose={() => setTwoIsOpen(false)} />}
    </div>      
  );
};
