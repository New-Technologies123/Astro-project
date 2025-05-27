import Styles from './products.module.scss';
import { useState, useEffect, useRef } from 'react';
import product_4 from '../../../images/products/product_4.webp';
import product_4_1 from '../../../images/products/product_4_2.webp';
import product_4_3 from '../../../images/products/product_4_4.webp';
import up from '../../../images/arrow.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';

export const PreparationSystems = () => {
  const { t } = useTranslation('products');

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);

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
          <div className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🚀</span>
              <p>{t('Запуск')}</p>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🔘</span>
              <p>{t('Блок')}</p>
            </button>
            <button onClick={() => handleClick('products-3')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🧹</span>
              <p>{t('Очистка')}</p>
            </button>
          </div>
        </aside>
        <div className={Styles.content}>
          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>{t('Запуск')}</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_4.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>{t('Увеличение')}</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⏱️</div>
                  <div className={Styles.featureText}>
                    <h4>{t('Назначение')}</h4>
                    <p>{t('Переодического')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⛽</div>
                  <div className={Styles.featureText}>
                    <h4>{t('Область')}</h4>
                    <p>{t('Узлы')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>{t('Блок')}</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_4_1.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>{t('Увеличение')}</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🌊</div>
                  <div className={Styles.featureText}>
                    <h4>{t('Назначение')}</h4>
                    <p>{t('Распределение')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3"  ref={el => sectionsRef.current[2] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2>{t('Очистка')}</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThreeIsOpen(true)}>
                <img src={product_4_3.src} alt="#" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>{t('Увеличение')}</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔄</div>
                  <div className={Styles.featureText}>
                    <h4>{t('Назначение')}</h4>
                    <p>{t('Поверхности')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={Styles.features}>
              <h3>{t('Аналог')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧵</div>
                  <div className={Styles.featureText}>
                    <p>{t('Сматывание')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚙️</div>
                  <div className={Styles.featureText}>
                    <p>{t('Процесс')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>📏</div>
                  <div className={Styles.featureText}>
                    <p>{t('Положения')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔪</div>
                  <div className={Styles.featureText}>
                    <p>{t('Скребок')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🧲</div>
                  <div className={Styles.featureText}>
                    <p>{t('Магниты')}</p>
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

      {oneIsOpen && <BigPhoto src={product_4.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_4_1.src} onClose={() => setTwoIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_4_3.src} onClose={() => setThreeIsOpen(false)} />}
    </div>
      
  );
};
