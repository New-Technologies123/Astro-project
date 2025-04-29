import Styles from './products.module.scss';
import { useState, useEffect, useRef } from 'react';
import product_3 from '../../../images/products/product_3.webp';
import product_3_1 from '../../../images/products/product_3_1.webp';
import product_3_2 from '../../../images/products/product_3_2.webp';
import product_3_3 from '../../../images/products/product_3_3.webp';
import up from '../../../images/arrow.svg';
import dot from '../../../images/dot.svg';
import { BigPhoto } from '../../ui/big-photo/BigPhoto';
import { useClickToScroll } from '../../../hooks/useClickToScroll';
import { useTranslation } from 'react-i18next';

export const MeasuringSystem = () => {
  const { t } = useTranslation('products');

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);
  const [fourIsOpen, setFourIsOpen] = useState(false);

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
              <span>{t('СИКН')}</span>
            </button>
            <button onClick={() => handleClick('products-2')} className={`${Styles.navItem}`}>
              <span>{t('СИКГ')}</span>
            </button>
            <button onClick={() => handleClick('products-3')} className={`${Styles.navItem}`}>
              <span>{t('СИКВ')}</span>
            </button>
            <button onClick={() => handleClick('products-4')} className={`${Styles.navItem}`}>
              <span>{t('БДР')}</span>
            </button>
          </nav>
        </aside>

        <div className={Styles.content}>
          <section id="products-1" ref={el => sectionsRef.current[0] = el} className={Styles.section}>
              <div className={Styles.sectionHeader}>
              <h2><span>Система измерения количества и показателей качества</span> нефти и нефтепродуктов (СИКН)</h2>
              <p>Надежное решение для стационарных газозаправочных станций</p>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setOneIsOpen(true)}>
                <img src={product_3.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>{t('Назначение')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Измерения')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Определения')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Отбор')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Выдача')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Изготавливаться')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-2" ref={el => sectionsRef.current[1] = el} className={Styles.section}>
              <div className={Styles.sectionHeader}>
              <h2><span>Система измерения количества</span> газа (СИКГ)</h2>
              <p>Надежное решение для стационарных газозаправочных станций</p>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setTwoIsOpen(true)}>
                <img src={product_3_1.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>{t('Назначение')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Автоматизированного')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Входит')}</p>
                  </div>
                </li>
              </ul>
              <h3>{t('Типовой')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Преобразователь')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Вычислитель')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Регуляторы')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Аппаратно')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Газовая')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Анализатор')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Преобразователи')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Система')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Комплексов')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="products-3" ref={el => sectionsRef.current[2] = el} className={Styles.section}>
              <div className={Styles.sectionHeader}>
              <h2><span>Система измерения</span> количества воды (СИКВ)</h2>
              <p>Надежное решение для стационарных газозаправочных станций</p>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setThreeIsOpen(true)}>
                <img src={product_3_2.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>{t('Назначение')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Количества')}</p>
                  </div>
                </li>                
              </ul>
              <h3>{t('Типовой')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Измерительных')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Измерительных')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Обработки')}</p>
                  </div>
                </li>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Технологические')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section id="products-4" ref={el => sectionsRef.current[3] = el} className={Styles.section}>
            <div className={Styles.sectionHeader}>
              <h2><span>Установка дозирования химическ</span> ого реагента (БДР)</h2>
              <p>Надежное решение для стационарных газозаправочных станций</p>
            </div>
            <div className={Styles.mainImageContainer}>
              <div className={Styles.imageCard} onClick={() => setFourIsOpen(true)}>
                <img src={product_3_3.src} alt="Мобильная АГЗУ" className={Styles.mainImage} />
                <div className={Styles.imageOverlay}>
                  <span className={Styles.zoomText}>Нажмите для увеличения</span>
                </div>
              </div>
            </div>
            <div className={Styles.features}>
              <h3>{t('Назначение')}</h3>
              <ul className={Styles.featuresList}>
                <li className={Styles.feature}>
                  <div>
                    <p className={Styles.featureText}>{t('Установка')}</p>
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

      {oneIsOpen && <BigPhoto src={product_3.src} onClose={() => setOneIsOpen(false)} />}
      {twoIsOpen && <BigPhoto src={product_3_1.src} onClose={() => setTwoIsOpen(false)} />}
      {threeIsOpen && <BigPhoto src={product_3_2.src} onClose={() => setThreeIsOpen(false)} />}
      {fourIsOpen && <BigPhoto src={product_3_3.src} onClose={() => setFourIsOpen(false)} />}
    </div>
      
  );
};
