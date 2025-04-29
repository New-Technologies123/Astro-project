import Styles from './products.module.scss';
import { useState, useEffect, useRef } from 'react';
import product_4 from '../../../images/products/product_4.webp';
import product_4_1 from '../../../images/products/product_4_2.webp';
import product_4_2 from '../../../images/products/product_4_3.webp';
import product_4_3 from '../../../images/products/product_4_4.webp';
import product_4_4 from '../../../images/products/product_4_5.webp';
import dot from '../../../images/dot.svg';
import up from '../../../images/arrow.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';
import { GalleryProducts } from '../../ui/gallery/GalleryProducts';

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
          <nav className={Styles.navMenu}>
            <button onClick={() => handleClick('products-1')} className={`${Styles.navItem}`}>
              <span>{t('Запуск')}</span>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span>{t('Блок')}</span>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span>{t('Очистка')}</span>
            </button>
          </nav>
        </aside>
        <div className={Styles.content}>
          <section id="products-1"  ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Устройство запуска и приема внутритрубных средст</span>в очистки и диагностики УЗПЗ, УЗПП</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_4.src} alt="#" className={Styles.mainImage} />
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
                    <p className={Styles.featureText}>{t('Переодического')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Область')}</h4>
                    <p className={Styles.featureText}>{t('Узлы')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2"  ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Блок гребе</span>нки (БГ)</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_4_1.src} alt="#" className={Styles.mainImage} />
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
                    <p className={Styles.featureText}>{t('Распределение')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3"  ref={el => sectionsRef.current[2] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Устройство очистки колон</span>ны УОК-НКТ</h2>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThreeIsOpen(true)}>
                {/* <div>
                  <GalleryProducts
                    photos={[
                      { id: 1, src: product_4_2.src, alt: '' },
                      { id: 2, src: product_4_3.src, alt: '' },
                      { id: 3, src: product_4_4.src, alt: '' },
                    ]}
                  />
                </div> */}
                <img src={product_4_3.src} alt="#" className={Styles.mainImage} />
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
                    <p className={Styles.featureText}>{t('Поверхности')}</p>
                  </div>
                </li>
              </ul>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <h4 className={Styles.featureTitle}>{t('Аналог')}</h4>
                    <p className={Styles.featureText}>{t('Сматывание')}</p>
                    <p className={Styles.featureText}>{t('Процесс')}</p>
                    <p className={Styles.featureText}>{t('Положения')}</p>
                    <p className={Styles.featureText}>{t('Скребок')}</p>
                    <p className={Styles.featureText}>{t('Магниты')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* <div className={Styles.productsInfo}>
        
        <section className={Styles.productsText}>
          <h3 id="products-3">{t('Очистка')}</h3>
          <div className={Styles.productsGallery}>
            <GalleryProducts
              photos={[
                { id: 1, src: product_4_2.src, alt: '' },
                { id: 2, src: product_4_3.src, alt: '' },
                { id: 3, src: product_4_4.src, alt: '' },
              ]}
            />
          </div>
                    
        </section>
      </div> */}

      <button 
        onClick={scrollToTop} 
        className={`${Styles.backToTop} ${isVisible ? Styles.visible : ''}`}
        aria-label="Наверх">
        <img src={up.src} alt="" className={Styles.upIcon} />
      </button>

      {oneIsOpen && <BigPhoto src={product_4.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_4_1.src} onClose={() => setTwoIsOpen(false)} />}
      {/* {threeIsOpen && <BigPhoto src={product_4_2.src} onClose={() => setThreeIsOpen(false)} />} */}
      {threeIsOpen && <BigPhoto src={product_4_3.src} onClose={() => setThreeIsOpen(false)} />}
      {/* {threeIsOpen && <BigPhoto src={product_4_4.src} onClose={() => setThreeIsOpen(false)} />} */}
    </div>
      
  );
};
