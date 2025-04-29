import { useState, useEffect, useRef } from 'react';
import product_1 from '../../../images/products/product_1.webp';
import product_1_1 from '../../../images/products/product_1_1.webp';
import product_1_2 from '../../../images/products/product_1_2.webp';
import up from '../../../images/arrow.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import Styles from './products.module.scss';
import { useTranslation } from 'react-i18next';
import { useClickToScroll } from '../../../hooks/useClickToScroll';

export const AccountingSystem = () => {
  const { t } = useTranslation('products');
  
  const [firstIsOpen, setFirstIsOpen] = useState(false);
  const [secondIsOpen, setSecondIsOpen] = useState(false);
  const [thirdIsOpen, setThirdIsOpen] = useState(false);

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
              <span className={Styles.navIcon}>🏢</span>
              <span>{t('Стационарная')}</span>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span className={Styles.navIcon}>🚚</span>
              <span>{t('Мобильная')}</span>
            </button>
          </nav>
        </aside>

        <div className={Styles.content}>
          <section 
            id="products-1" ref={el => sectionsRef.current[0] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Стационарная</span> система</h2>
              <p>Надежное решение для стационарных газозаправочных станций</p>
            </div>

            <div className={Styles.gallery}>
              <div className={Styles.imageCard} onClick={() => setFirstIsOpen(true)}>
                <img src={product_1.src} alt="Стационарная АГЗУ" className={Styles.image} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
              <div className={Styles.imageCard} onClick={() => setSecondIsOpen(true)}>
                <img src={product_1_1.src} alt="Стационарная АГЗУ" className={Styles.image} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>

            <div className={Styles.features}>
              <h3>Основные преимущества</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>💎</div>
                  <div>
                    <h4 className={Styles.featureTitle}>Высокая надежность</h4>
                    <p className={Styles.featureText}>{t('Высокая')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🔧</div>
                  <div>
                    <h4 className={Styles.featureTitle}>Гибкость настройки</h4>
                    <p className={Styles.featureText}>{t('Гибкая')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section 
            id="products-2" ref={el => sectionsRef.current[1] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Мобильная</span> система</h2>
              <p>Современное решение для мобильных газозаправочных пунктов</p>
            </div>

            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThirdIsOpen(true)}>
                <img src={product_1_2.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>

            <div className={Styles.features}>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>🏭</div>
                  <div>
                    <h4 className={Styles.featureTitle}>Качественное изготовление</h4>
                    <p className={Styles.featureText}>{t('Изготовлении')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div className={Styles.featureIcon}>⚡</div>
                  <div>
                    <h4 className={Styles.featureTitle}>Быстрое развертывание</h4>
                    <p className={Styles.featureText}>{t('Действия')}</p>
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

      {firstIsOpen && <BigPhoto src={product_1.src} onClose={() => setFirstIsOpen(false)} />}
      {secondIsOpen && <BigPhoto src={product_1_1.src} onClose={() => setSecondIsOpen(false)} />}
      {thirdIsOpen && <BigPhoto src={product_1_2.src} onClose={() => setThirdIsOpen(false)} />}
    </div>
  );
};